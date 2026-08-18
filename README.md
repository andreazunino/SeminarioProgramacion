# Raíces Café — Proyecto integrador del Seminario de Programación

Landing page de un emprendimiento ficticio (una cafetería de especialidad
llamada **Raíces Café**), construida a lo largo de toda la cursada usando
exclusivamente **HTML, CSS y JavaScript puro** ("Vanilla JS").

No se utiliza ningún framework ni librería: nada de React, Vue, Angular,
Bootstrap, Tailwind ni jQuery. La idea es que cada estudiante entienda,
línea por línea, cómo se relacionan los tres lenguajes de la web sin que
una herramienta externa "resuelva" el trabajo por él o ella.

## Objetivo del proyecto

Que el curso construya, en conjunto y de forma progresiva, un mismo sitio
web a lo largo de todas las clases, en lugar de hacer ejercicios sueltos y
desconectados entre sí. Cada clase agrega una pieza nueva sobre lo que ya
existe, así se practica algo muy real del trabajo de un/a desarrollador/a
frontend: **modificar y ampliar código que ya fue escrito**, en vez de
empezar siempre de cero.

Al terminar las tres etapas (HTML, CSS y JavaScript), el proyecto va a
tener:

- Un `<header>` con logo textual y menú de navegación.
- Una sección "hero" con título, bajada y botón de llamada a la acción.
- Una sección "Sobre nosotros".
- Una sección de servicios, mostrada en tarjetas.
- Una sección de "Proyecto" (una propuesta a futuro del emprendimiento).
- Un formulario de contacto con validación y mensaje de confirmación.
- Un `<footer>`.
- Estilos responsive (escritorio, tablet y celular).
- Un menú móvil funcional y algunas interacciones con JavaScript.

## Estructura de carpetas

```
landing-page/
├── index.html          -> estructura HTML completa del sitio
├── css/
│   └── estilos.css     -> todos los estilos del sitio
├── js/
│   └── app.js           -> toda la lógica de JavaScript
├── img/                 -> acá van las imágenes del sitio (ver abajo)
└── README.md             -> este archivo
```

### Imágenes que faltan agregar

El HTML ya hace referencia a estas imágenes, pero la carpeta `img/` está
vacía: es una actividad para el curso conseguirlas o crearlas (pueden ser
banco de imágenes gratuito, un logo hecho en Canva, o directamente fotos
propias).

| Archivo esperado  | Dónde se usa                          |
| ------------------ | -------------------------------------- |
| `img/logo.png`      | Logo en el `<header>`                  |
| `img/equipo.jpg`     | Sección "Sobre nosotros"               |

## ¿Cómo se relacionan HTML, CSS y JavaScript?

- **HTML** (`index.html`) define el **contenido y la estructura**: qué hay
  en la página y en qué orden (un título, un párrafo, un formulario, etc.).
  Es el "esqueleto".
- **CSS** (`css/estilos.css`) define la **presentación visual**: colores,
  tipografías, espaciados, disposición en pantalla (flexbox, grid) y
  comportamiento responsive. Es la "piel".
- **JavaScript** (`js/app.js`) define el **comportamiento**: qué pasa
  cuando el usuario hace clic, escribe en un campo o envía el formulario.
  Es lo que hace que la página reaccione, en lugar de ser estática.

Los tres archivos se conectan entre sí a través de **ids y classes**:
HTML los declara (`id="contacto"`, `class="tarjeta"`), CSS los usa como
selectores para aplicar estilos, y JavaScript los usa con
`document.querySelector()` para encontrar y modificar elementos.

## Contenidos incorporados en cada etapa

### Etapa 1 — HTML (`index.html`)

| Clase | Contenido |
| ----- | --------- |
| 1 | Estructura básica del documento (`<!DOCTYPE>`, `<html>`, `<head>`, `<body>`) |
| 2 | Etiquetas de texto: encabezados y párrafos |
| 3 | Enlaces y listas (menú de navegación, lista de servicios) |
| 4 | Imágenes y rutas relativas a la carpeta `img/` |
| 5 | Etiquetas semánticas: `header`, `nav`, `main`, `section`, `article`, `footer` |
| 6 | Formulario con `label`, `input`, `textarea` y `button` |
| 7 | Repaso general de atributos `id` y `class` usados en toda la página |

### Etapa 2 — CSS (`css/estilos.css`)

| Clase | Contenido |
| ----- | --------- |
| 1 | Vinculación del CSS externo + reset básico |
| 2 | Selectores de etiqueta, clase e id |
| 3 | Colores y fondos (variables CSS con `:root`) |
| 4 | Tipografías y estilos de texto |
| 5 | Modelo de caja (`box-sizing: border-box`) |
| 6 | Margin, padding y border |
| 7 | Estilos de enlaces y botones |
| 8 | Flexbox (header, menú, formulario) |
| 9 | Grid (grilla de tarjetas de servicios) |
| 10 | Pseudoclases `:hover` y `:focus` |
| 11 | Transiciones sencillas |
| 12 | Media queries (primer ejemplo simple) |
| 13 | Diseño responsive completo: escritorio, tablet y celular |

### Etapa 3 — JavaScript (`js/app.js`)

| Clase | Contenido |
| ----- | --------- |
| 1 | `console.log`, variables `const`/`let`, tipos de datos y operadores |
| 2 | Condicionales (`if` / `else if` / `else`) |
| 3 | Funciones (declaración y arrow function) |
| 4 | Arrays y objetos (datos de los servicios) |
| 5 | Selección de elementos con `querySelector` y `querySelectorAll` |
| 6 | Modificación de texto, clases y atributos |
| 7 | Eventos `click`, `submit` e `input` |
| 8 | Validación básica del formulario |
| 9 | Mensaje de confirmación al enviar el formulario |
| 10 | Menú móvil (mostrar/ocultar el `<nav>` con un botón) |
| 11 | Mostrar y ocultar contenido ("Conocer más" en Sobre nosotros) |
| 12 | Generación dinámica de tarjetas a partir de un array de objetos |

## Cómo abrir el proyecto con Live Server

1. Instalá la extensión **Live Server** en Visual Studio Code (ícono de
   extensiones en la barra lateral, buscar "Live Server" de Ritwick Dey e
   instalar).
2. Abrí la carpeta `landing-page/` completa en VS Code (`Archivo > Abrir
   carpeta...`), no sólo el archivo `index.html` suelto.
3. Hacé clic derecho sobre `index.html` en el explorador de archivos y
   elegí **"Open with Live Server"** (o el botón "Go Live" abajo a la
   derecha de la ventana).
4. Se va a abrir el navegador automáticamente en una dirección como
   `http://127.0.0.1:5500/index.html`. Cada vez que guardes un cambio en
   HTML, CSS o JS, la página se va a recargar sola.

> Nota: si abrís `index.html` con doble clic (sin Live Server), el sitio
> también va a funcionar, pero es buena costumbre acostumbrarse a usar un
> servidor local desde ahora, porque más adelante en la carrera algunas
> funcionalidades (como pedir datos a otro archivo) no funcionan si el
> archivo se abre "directo" desde el disco.

## Actividades para estudiantes

1. **Personalización de marca**: cambiar el nombre "Raíces Café" por el de
   un emprendimiento propio (real o inventado) en `index.html`, y ajustar
   los textos de cada sección para que tengan sentido con el nuevo rubro.
2. **Paleta de colores propia**: modificar las variables CSS dentro de
   `:root` en `estilos.css` para armar una paleta de colores distinta,
   coherente con la nueva marca.
3. **Quinto servicio**: agregar un objeto más al array `servicios` en
   `app.js` (Clase 4/12) y comprobar que la tarjeta nueva aparece sola,
   sin tocar el HTML.
4. **Nueva sección**: agregar una sección "Preguntas frecuentes" al
   `<main>`, con al menos 3 preguntas y respuestas, usando las etiquetas
   semánticas correctas.
5. **Revisión cruzada**: en parejas, intercambiar el proyecto con un
   compañero o compañera y usar el inspector del navegador (F12) para
   identificar 3 ids o classes que no se estén usando en el CSS o el JS.

## Desafíos opcionales

- **Validación de teléfono**: agregar un campo `input type="tel"` al
  formulario y validarlo con una expresión regular sencilla.
- **Contador de caracteres**: mostrar en tiempo real, debajo del
  `textarea` del mensaje, cuántos caracteres lleva escritos el usuario
  (usando el evento `input` que ya vimos en la Clase 7).
- **Modo oscuro**: agregar un botón que alterne una clase `modo-oscuro`
  en el `<body>`, y definir en CSS una segunda paleta de colores para ese
  modo usando variables CSS.
- **Scroll suave**: investigar la propiedad CSS `scroll-behavior: smooth`
  y aplicarla al `html`, para que los enlaces internos del menú se
  desplacen de forma animada en vez de "saltar" directamente.
- **Guardar en localStorage**: al enviar el formulario, además del
  mensaje de confirmación, guardar el nombre del último visitante en
  `localStorage` y mostrarlo la próxima vez que se abra la página
  ("¡Hola de nuevo, [nombre]!").

## Otro proyecto en este repo: Sierra Fit (lp_gimnasio_clase)

Dentro de la carpeta [`lp_gimnasio_clase/`](lp_gimnasio_clase/) hay un segundo
proyecto, independiente de Raíces Café: la landing page de un gimnasio
ficticio ("Sierra Fit Tandil"), con su propio repositorio Git. Es más grande
y completo que este (planes, tabla de clases y horarios, profesores,
formulario de inscripción, etc.) y se usa con dos objetivos distintos:

- Como material de la materia de Base de Datos, para que el curso analice su
  contenido e identifique entidades, atributos y relaciones.
- Como actividad grupal de armado colaborativo: el curso se divide en 4
  grupos, cada uno construye una parte del sitio (estructura base, planes y
  clases, contenido general, o el formulario) en su propia rama de Git, y
  después integran todo fusionando ramas y resolviendo a mano los conflictos
  de merge que van a surgir en `index.html` y `estilos.css`.

El detalle completo de esa actividad (división de grupos, pasos de Git,
tipos de conflictos a resolver y checklist final) está en
[`lp_gimnasio_clase/README.md`](lp_gimnasio_clase/README.md).

## Posibles errores frecuentes

- **"No pasa nada al hacer clic en ningún botón"**: revisar en la consola
  del navegador (F12 → Console) si aparece algún error en rojo. Es muy
  común que un `id` esté mal escrito (por ejemplo, con una letra de más o
  de menos) entre el HTML y el `querySelector` del JS: los nombres tienen
  que ser **exactamente** iguales, incluyendo mayúsculas/minúsculas.
- **"Los estilos no se aplican"**: comprobar que el `<link>` dentro del
  `<head>` de `index.html` apunte correctamente a `css/estilos.css` (con
  esa ruta relativa, no a `estilos.css` solo, salvo que el archivo esté en
  la misma carpeta).
- **"El script no encuentra los elementos" / `Cannot read properties of
  null`**: en general significa que `document.querySelector()` no
  encontró nada con ese selector, casi siempre por un id mal escrito o
  porque el `<script>` se ejecuta antes de que exista ese elemento en el
  HTML. Acá usamos el atributo `defer` en el `<script>` de `index.html`
  para evitar este segundo problema: si se saca ese atributo, pueden
  volver a aparecer estos errores.
- **"Las imágenes no se ven"**: comprobar que existan los archivos dentro
  de `img/` con el mismo nombre (y la misma extensión, `.png` vs `.jpg`)
  que aparece en el atributo `src` del HTML. Las rutas en la web son
  sensibles a mayúsculas y minúsculas en muchos sistemas operativos.
- **"El menú móvil no se ve en la compu"**: es el comportamiento
  esperado. El botón hamburguesa sólo se muestra en pantallas angostas
  (menos de 480px de ancho), gracias a la media query de la Clase 13 de
  CSS. Para probarlo en la computadora, hay que achicar la ventana del
  navegador o usar el modo "Toggle device toolbar" del inspector (F12).
- **"El formulario se envía y la página se recarga"**: significa que
  falta (o se borró por error) el `event.preventDefault()` dentro del
  listener de `submit` en `app.js`.
