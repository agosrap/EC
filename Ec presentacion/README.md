# Curso ECREPRO Paraguay — presentación

Presentación web estática (HTML + CSS + JS, sin dependencias), 130 diapositivas. Lista para desplegar en Vercel.

## Uso
- Abrir `index.html` o desplegar la carpeta tal cual en Vercel (`vercel --prod` o arrastrar la carpeta).
- Navegación: `→` `←` `Espacio` · clic en los laterales · deslizar en móvil.
- `F` pantalla completa · `O` vista general de todas las diapositivas · `Esc` cierra la vista general.
- La URL guarda la diapositiva actual (`#12`), así que se puede compartir un enlace a una diapositiva concreta.

## Fotos
Todas las fotos van en `assets/img/`. Si falta alguna, la presentación intenta cargarla desde su origen online (web de ElectrónicaCar o Higgsfield) y, si tampoco existe, muestra un recuadro gris con la descripción.

Las fotos van en `assets/img/` en formato **JPG** con el nombre exacto que se indica en `FOTOS.md`.
Mientras no exista el archivo, la diapositiva muestra un recuadro con la descripción de la foto necesaria.
Al copiar la foto con el nombre correcto, aparece automáticamente. Tamaño recomendado: 1920 px de ancho, JPG calidad 80.

## Estructura
- `content.js` — portada, bloques 1–2, separadores y objetivos de cada bloque, cierre.
- `content2.js` — contenido de los bloques 3–9 (se inserta tras la diapositiva de objetivos de cada bloque).
- `templates2.js` — plantillas e interacciones de los bloques 3–9.
- `app.js` — plantillas y motor de navegación.
- `styles.css` — sistema visual (colores, tipografía Barlow, plantillas).
- `assets/` — logo, fuentes y fotos.
