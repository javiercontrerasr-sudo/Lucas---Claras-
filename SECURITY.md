# Seguridad de Lucas Claras

## Cómo está protegido el sitio

- **Sitio estático.** No hay servidor propio, base de datos, cuentas de usuario ni formularios que envíen datos. No se pueden subir archivos al sitio.
- **Política de seguridad de contenido (CSP).** Solo se ejecuta el código de `assets/app.js`. Están bloqueados los scripts en línea, los scripts de otros sitios, `eval`, los marcos (`iframe`, `object`, `embed`) y el envío de formularios. Las conexiones solo se permiten al propio sitio y a `mindicador.cl` (indicadores del Banco Central).
- **Datos externos tratados como no confiables.** Los valores que llegan de `mindicador.cl` se aceptan solo como números válidos y nunca como HTML. El texto que escribe la persona en el buscador se escapa antes de mostrarse.
- **Contra el clickjacking.** Si alguien carga el sitio dentro de un marco ajeno, el sitio sale del marco.
- **Enlaces externos aislados** con `rel="noopener noreferrer"`, sin enviar el origen de la visita.

## Planillas descargables

- Solo se aceptan archivos `.xlsx` en `descargas/`, con nombres en minúscula, hasta 2 MB.
- Cada planilla se revisa en cada cambio: sin macros (`vbaProject`), sin vínculos externos, sin objetos incrustados ni ActiveX.
- La huella SHA-256 de cada archivo está en `SHA256SUMS` y en el sitio. El navegador la comprueba antes de guardar el archivo y no lo descarga si no coincide.
- Límite en el navegador: 15 descargas por hora y una cada 3 segundos.

## Vigilancia

- **Antes de publicar:** el flujo *Verificar y publicar* ejecuta `scripts/verify.py`. Si un control falla, el sitio no se publica.
- **Todos los días:** el flujo *Vigilancia del sitio en vivo* descarga lo publicado y lo compara con las huellas del repositorio. Si algo cambió o el sitio no responde, abre un aviso con la etiqueta `alerta-seguridad`.

## Recomendaciones para la cuenta

- Activa la verificación en dos pasos en GitHub y revisa las sesiones y llaves SSH de vez en cuando.
- No guardes contraseñas, claves ni datos personales en este repositorio.

## Reportar un problema

Usa [Reportar una vulnerabilidad](../../security/advisories/new) en este repositorio. No abras un issue público con los detalles.
