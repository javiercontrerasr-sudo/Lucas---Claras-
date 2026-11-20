"""Controles de seguridad del sitio Lucas Claras. Falla (código 1) si encuentra algo sospechoso."""
import hashlib, json, re, sys, zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
errores = []

def sha(p):
    return hashlib.sha256(p.read_bytes()).hexdigest()

# 1. Huellas publicadas en SHA256SUMS
sums = {}
for line in (ROOT / "SHA256SUMS").read_text().splitlines():
    if line.strip():
        h, f = line.split("  ", 1)
        sums[f] = h
        p = ROOT / f
        if not p.is_file():
            errores.append(f"Falta el archivo {f}")
        elif sha(p) != h:
            errores.append(f"La huella de {f} no coincide con SHA256SUMS")

# 2. Sólo se permiten planillas .xlsx limpias en descargas/
for p in sorted((ROOT / "descargas").iterdir()):
    if not re.fullmatch(r"[a-z0-9-]{1,60}\.xlsx", p.name):
        errores.append(f"Archivo no permitido en descargas/: {p.name}")
        continue
    if f"descargas/{p.name}" not in sums:
        errores.append(f"{p.name} no está registrado en SHA256SUMS")
    if p.stat().st_size > 2 * 1024 * 1024:
        errores.append(f"{p.name} pesa más de 2 MB")
    try:
        with zipfile.ZipFile(p) as z:
            for n in z.namelist():
                low = n.lower()
                if any(k in low for k in ("vbaproject", "externallink", "oleobject", "activex", "embeddings/", ".bin")):
                    errores.append(f"{p.name} contiene un elemento riesgoso: {n}")
                if low.endswith(".rels"):
                    if b'TargetMode="External"' in z.read(n):
                        errores.append(f"{p.name} tiene un vínculo externo en {n}")
    except zipfile.BadZipFile:
        errores.append(f"{p.name} no es un .xlsx válido")

# 3. HTML: política de seguridad y nada de código en línea
html = (ROOT / "index.html").read_text(encoding="utf-8")
if 'http-equiv="Content-Security-Policy"' not in html or "script-src 'self'" not in html:
    errores.append("index.html no tiene la política de seguridad de contenido (CSP) esperada")
if re.search(r"<script(?![^>]*\bsrc=)[^>]*>", html, re.I):
    errores.append("index.html tiene un <script> en línea")
if re.search(r"<script[^>]+src=\"https?:", html, re.I):
    errores.append("index.html carga un script externo")
if re.search(r"<[^>]+\son[a-z]+\s*=", html, re.I):
    errores.append("index.html tiene atributos de evento (onclick, onerror…)")
if re.search(r"<iframe|<object|<embed", html, re.I):
    errores.append("index.html incluye iframe, object o embed")
for m in re.finditer(r'<a [^>]*href="https?://[^"]+"[^>]*>', html):
    if 'rel="noopener noreferrer"' not in m.group(0):
        errores.append("Enlace externo sin rel=noopener: " + m.group(0)[:80])

# 4. JavaScript: sin eval ni equivalentes, y huellas de descargas coherentes
js = (ROOT / "assets" / "app.js").read_text(encoding="utf-8")
for patron in (r"\beval\(", r"new Function\(", r"document\.write", r"setTimeout\(\s*['\"]", r"\.outerHTML\s*="):
    if re.search(patron, js):
        errores.append(f"app.js usa un patrón peligroso: {patron}")
m = re.search(r"const DL=/\*DL_DATA\*/(\[.*?\]);\n", js, re.S)
if not m:
    errores.append("No se encontró la lista de descargas en app.js")
else:
    for d in json.loads(m.group(1)):
        p = ROOT / "descargas" / d["file"]
        if not p.is_file():
            errores.append(f"app.js publica {d['file']} pero el archivo no existe")
        elif sha(p) != d["sha"] or p.stat().st_size != d["size"]:
            errores.append(f"La huella o el tamaño de {d['file']} en app.js no coincide con el archivo")

if errores:
    print("CONTROLES FALLIDOS:")
    for e in errores:
        print(" -", e)
    sys.exit(1)
print(f"Controles superados: {len(sums)} huellas, {len(list((ROOT / 'descargas').iterdir()))} planillas limpias, CSP y código sin riesgos.")
