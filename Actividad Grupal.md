# Sierra Fit Tandil — Landing Page

Landing page de un gimnasio ficticio ("Sierra Fit Tandil") desarrollada como
material de cátedra para la materia de Base de Datos. El sitio funciona como
una página de marketing real; el objetivo de la materia es que los
estudiantes analicen su contenido (planes, clases, horarios, profesores,
formulario de inscripción, métodos de pago, etc.) para identificar entidades,
atributos y relaciones y a partir de eso diseñar un modelo de datos.

## Stack

- HTML5 semántico
- CSS puro (Flexbox, Grid, variables CSS) — sin frameworks
- JavaScript vanilla (sin librerías)

No requiere `npm`, `Vite`, `React` ni ningún build tool: son archivos que se
abren directo en el navegador.

## Estructura del proyecto

```
lp_gimnasio_clase/
├── index.html          → página principal
├── css/
│   └── estilos.css     → estilos del sitio
├── js/
│   └── main.js         → menú hamburguesa, scroll suave y validación del form
├── img/                → carpeta para imágenes (el sitio usa gradientes/emojis
│                          como placeholders, así que no depende de archivos externos)
└── README.md
```

## Cómo abrirlo

Simplemente abrí `index.html` con doble clic o arrastrándolo a un navegador.
No hace falta ningún servidor: el formulario de inscripción valida los
campos con JavaScript y, al enviarse correctamente, muestra un mensaje de
confirmación en la misma página.

## Secciones del sitio

1. **Inicio (Hero)** — presentación del gimnasio y botón "Asociate".
2. **Planes** — 4 membresías (Básico, Full, Premium, Estudiante) con precio,
   beneficios y condiciones de permanencia.
3. **Clases y horarios** — tabla con 10 clases grupales (Funcional, Spinning,
   Yoga, Pilates, Musculación guiada, Crossfit, Zumba), cada una con día,
   horario, cupo máximo y profesor a cargo.
4. **Profesores** — tarjetas del staff con nombre y especialidad.
5. **Testimonios** — opiniones de socios.
6. **Sumate (formulario de inscripción)** — datos personales, plan y método
   de pago, con validación básica en JavaScript.
7. **Métodos de pago** — efectivo, débito, crédito, transferencia y Mercado Pago.
8. **Preguntas frecuentes**.
9. **Sede** — dirección, horarios de atención, teléfono y redes sociales.
10. **Footer**.

Los datos de planes, clases y profesores son consistentes entre sí (por
ejemplo, el select de planes del formulario tiene las mismas opciones que la
sección de Planes, y cada clase tiene un único profesor asignado, aunque un
mismo profesor puede dictar varias clases).

## Actividad: armado colaborativo en 4 grupos con Git

El objetivo de esta actividad es construir esta misma landing page (u otra
propuesta similar acordada con el docente) trabajando en paralelo en 4 grupos,
y después integrar todo el trabajo en un único repositorio usando Git: subir
ramas, abrir Pull Requests y **resolver a mano los conflictos de merge**.

### 0. Preparación (antes de dividir el trabajo)

1. El docente crea un repositorio en GitHub con la estructura base vacía:

   ```
   index.html   (doctype, head y body vacíos, con los <link>/<script> ya
                  apuntando a css/estilos.css y js/main.js)
   css/estilos.css   (solo variables :root, reset básico y utilidades: .contenedor, .btn)
   js/main.js        (vacío o con el listener DOMContentLoaded ya armado)
   ```

2. Todos los integrantes de los 4 grupos se agregan como colaboradores del
   repositorio (o lo forkean, según indique el docente).
3. Cada grupo clona el repositorio y crea **su propia rama** desde `main`:

   ```bash
   git checkout -b grupo-1-base
   git checkout -b grupo-2-planes-clases
   git checkout -b grupo-3-contenido
   git checkout -b grupo-4-formulario
   ```

4. Cada grupo trabaja **solo en su rama**, sin tocar `main`, y va haciendo
   commits chicos y descriptivos a medida que avanza.

### 1. División del trabajo entre los 4 grupos

**Grupo 1 — Base del sitio (Header, Hero y Footer)**

Arma el "esqueleto" sobre el que se van a enganchar las secciones de los
demás grupos.

- HTML: `<head>` completo (meta, title, description), `header` con logo,
  navegación y botón de menú hamburguesa, sección Hero (`#inicio`) y
  `footer`.
- CSS: variables globales en `:root`, reset básico, utilidades genéricas
  (`.contenedor`, `.btn` y variantes), y los estilos propios de
  header/nav/hero/footer.
- Deja dentro de `<main>` un comentario `<!-- ACÁ VAN LAS SECCIONES DE LOS OTROS GRUPOS -->`
  a modo de referencia para que los demás grupos sepan dónde insertar su
  código.

**Grupo 2 — Planes y Clases/horarios**

- HTML: sección Planes (`#planes`, 4 tarjetas de membresía con precio,
  beneficios y condiciones) y sección Clases y horarios (`#clases`, tabla
  con día, horario, cupo y profesor).
- CSS: estilos de `.grid-planes`, `.tarjeta-plan` (y su variante
  destacada) y de `.tabla-scroll` / `.tabla-clases`.

**Grupo 3 — Profesores, Testimonios, Métodos de pago, FAQ y Sede**

- HTML: sección Profesores (`#profesores`, tarjetas con nombre y
  especialidad), Testimonios, Métodos de pago, Preguntas frecuentes
  (`#faq`, con `<details>`/`<summary>`) y Sede (`#sede`, dirección,
  horarios, teléfono y redes).
- CSS: estilos de `.grid-profesores`/`.tarjeta-profesor`,
  `.grid-testimonios`/`.tarjeta-testimonio`, `.grid-pagos`/`.tarjeta-pago`,
  `.acordeon` y `.grid-sede`/`.tarjeta-sede`.

**Grupo 4 — Formulario de inscripción y validación**

- HTML: sección Sumate (`#sumate`) con el formulario de inscripción
  (nombre, apellido, DNI, fecha de nacimiento, email, teléfono, plan y
  método de pago).
- CSS: estilos de `.formulario`, `.campo` y estados de error.
- JS (`js/main.js`): lógica del menú hamburguesa (mostrar/ocultar el nav
  en mobile) y la validación del formulario (campos requeridos, formato
  de email, DNI y teléfono). Si todo es válido, muestra un mensaje de
  confirmación en la misma página y limpia el formulario (no hay backend:
  todo el comportamiento es JavaScript en el navegador).

> Cada grupo debe poder mostrar su parte funcionando de forma aislada
> (abriendo su propio `index.html`) antes de pasar a la etapa de
> integración.

### 2. Integración: subir, fusionar y resolver conflictos

1. Cuando un grupo termina, sube su rama y abre un Pull Request contra
   `main`:

   ```bash
   git add .
   git commit -m "Grupo 1: header, hero y footer"
   git push origin grupo-1-base
   ```

2. **Se fusionan los Pull Requests en orden, del Grupo 1 al Grupo 4**,
   frente a toda la clase (proyectado o compartiendo pantalla):
   - El PR del **Grupo 1** se fusiona primero sin conflictos: pasa a ser
     la nueva base de `main`.
   - Al fusionar el PR del **Grupo 2**, va a haber conflicto en
     `index.html` (todos escribieron su `<section>` en el mismo lugar
     dentro de `<main>`) y posiblemente en `css/estilos.css` (todos
     agregaron reglas al final del archivo). Hay que abrir los archivos
     en conflicto, mirar los bloques `<<<<<<<`, `=======` y `>>>>>>>`, y
     decidir en qué orden quedan las secciones y las reglas CSS.
   - Lo mismo se repite al fusionar los PR del **Grupo 3** y el
     **Grupo 4**.
3. Antes de resolver cada conflicto, el grupo que lo generó explica en
   voz alta qué hizo y por qué, para que la decisión de "qué queda y qué
   no" la tome el curso en conjunto, no una sola persona.
4. Casos típicos que van a tener que discutir y resolver:
   - **Orden de las secciones** dentro de `<main>` (Inicio → Planes →
     Clases → Profesores → Testimonios → Sumate → Métodos de pago →
     FAQ → Sede).
   - **Nombres de clases CSS repetidos o inconsistentes** entre grupos
     (por ejemplo, si dos grupos usaron convenciones distintas para las
     tarjetas: unificar en una sola).
   - **Variables CSS duplicadas o con valores distintos** en `:root` (si
     dos grupos agregaron el mismo color con nombres diferentes, quedarse
     con una sola variable y actualizar quién la usa).
   - **IDs duplicados** usados por JavaScript (`document.getElementById`)
     que puedan pisarse entre secciones de distintos grupos.
5. Después de resolver cada conflicto:

   ```bash
   git add <archivos resueltos>
   git commit
   ```

   y se continúa con el merge del siguiente grupo.

### 3. Verificación final

1. Con todo fusionado en `main`, cada grupo hace `git pull` para traer la
   versión final integrada.
2. Se abre `index.html` en el navegador (doble clic, no hace falta ningún
   servidor).
3. Checklist final entre todos:
   - El menú de navegación funciona y hace scroll a cada sección.
   - El menú hamburguesa se abre/cierra correctamente en mobile.
   - Las 10 secciones están, en orden, sin contenido duplicado.
   - El formulario valida los campos y, al enviarse correctamente,
     muestra el mensaje de confirmación y se limpia.
   - El sitio se ve bien tanto en pantalla grande como en el celular
     (usar las herramientas de desarrollador del navegador).
