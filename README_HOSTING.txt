SmartLicit Beta 1.9 — paquete hostable

Archivo principal:
- index.html

Estructura:
- assets/css/shell.css: estilos del shell global/header.
- assets/js/assets.js: rutas de assets mínimos.
- assets/js/app.js: navegación, modo online/offline, Google Drive, Mi Cuenta e iframe loader.
- assets/img/google-drive.svg: ícono de Google Drive.
- sections/*.html: secciones funcionales extraídas del HTML único.
- *.html en raíz: rutas canónicas/alias ligeros que abren index.html en la sección correcta.

Rutas principales:
- index.html
- tender.html
- pricing.html
- file.html
- lex.html
- lex-gov.html
- lex-corp.html
- tender-gov.html
- pricing-gov.html
- planes.html
- blog.html
- ipg.html
- ipp.html
- efile.html
- gDrive.html
- mi-cuenta.html

Notas de implementación:
- home.html no se incluye como página duplicada; index.html es Home.
- Las secciones mantienen su HTML/CSS/JS interno para reducir regresiones visuales.
- El shell global carga cada sección desde /sections mediante iframe.
- El modo offline/online conserva la lógica aprobada hasta Beta 1.9.
- Para probar localmente, abre index.html o sirve la carpeta con cualquier servidor estático.

Cambios Beta 1.6:
- Homologación de nombres de planes en masculino: Básico, Corporativo, Avanzado y Gran Despacho.
- Mirror Smart Tender + Smart Pricing en Planes y Smart Tender offline.
- Mirror Smart Lex + Smart File en Planes y Smart Lex offline.
- Microcopy de costo adicional para checkboxes mirror/add-on y regla de suma al precio mensual del plan.

Cambios Beta 1.9:
- Smart Tender: Aplicar con IA a servicios y Market Express.
- Pricing Gov: Pricing Express.
- Tender Gov: Market Express Gov.
- IPG: bloque Market Express Gov.
- IPP, Lex Gov y Lex Corp agregados.
- Header reordenado con IPP y espaciado solicitado.
