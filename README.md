# Lucas Claras

Impuestos y plata en Chile, sin enredos: reforma tributaria, F22, F29, timbres y estampillas, indicadores (UF, UTM, dólar, Previred), biblioteca de leyes y planillas de Excel gratis.

Sitio: https://javiercontrerasr-sudo.github.io/lucas-claras/

## Estructura

| Ruta | Qué es |
| --- | --- |
| `index.html` | Página principal |
| `assets/app.js`, `assets/styles.css` | Código y estilos |
| `descargas/` | Planillas `.xlsx` sin macros |
| `SHA256SUMS` | Huellas de todos los archivos publicados |
| `scripts/verify.py` | Controles de seguridad que se ejecutan antes de publicar |
| `.github/workflows/` | Publicación verificada y vigilancia diaria |

## Publicar un cambio

1. Edita los archivos y actualiza `SHA256SUMS` (`sha256sum` de cada archivo).
2. Ejecuta `python scripts/verify.py`.
3. Sube los cambios a `main`. Si los controles pasan, GitHub Pages publica el sitio.

Ver [SECURITY.md](SECURITY.md) para el detalle de las protecciones.

Contenido informativo; no reemplaza la asesoría de un contador.
