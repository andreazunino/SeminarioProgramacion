/*
  ===================================================================
  PROYECTO: Raíces Café - Landing Page
  ETAPA 3: JAVASCRIPT
  ===================================================================
  Este archivo se construye de forma progresiva, clase a clase. Cada
  bloque de comentarios "CLASE N" indica en qué momento del curso se
  incorporó ese código. Lo que se agrega en una clase se conserva y
  se amplía en las siguientes: las funciones de una clase suelen
  reutilizar variables o funciones definidas en clases anteriores.

  Este script se carga con el atributo "defer" en index.html, así que
  para cuando se ejecuta, todo el HTML ya está disponible en el DOM.
  No hace falta envolver el código en un evento "DOMContentLoaded".

  No se usa jQuery ni ninguna librería: todo es JavaScript puro (a
  veces llamado "Vanilla JS").
*/


/* ===========================================================
   CLASE 1
   console.log, variables (const/let), tipos de datos y operadores
   =========================================================== */

console.log("app.js conectado correctamente ✅");

const nombreDelSitio = "Raíces Café";   // no va a cambiar durante la ejecución
let cantidadDeVisitas = 0;              // sí va a cambiar (la vamos a sumar)

// Tipos de datos básicos
const esCafeteria = true;               // boolean
const precioCafeConLeche = 2500;        // number
const ciudad = "Buenos Aires";          // string

console.log("Sitio:", nombreDelSitio, "| Ciudad:", ciudad);

cantidadDeVisitas = cantidadDeVisitas + 1; // también se puede escribir: cantidadDeVisitas++
console.log("Cantidad de visitas en esta sesión:", cantidadDeVisitas);

// Ejemplos de operadores, sólo para practicar en la consola:
const totalDosCafés = precioCafeConLeche * 2;
const hayDescuento = totalDosCafés > 4000 && esCafeteria;
console.log("Total de 2 cafés:", totalDosCafés, "| ¿Hay descuento?:", hayDescuento);


/* ===========================================================
   CLASE 2
   Condicionales
   =========================================================== */

const horaActual = new Date().getHours(); // número de 0 a 23
let saludoSegunHora;

if (horaActual < 12) {
    saludoSegunHora = "¡Buen día! Pasá a tomar un café recién hecho.";
} else if (horaActual < 20) {
    saludoSegunHora = "¡Buenas tardes! Todavía queda repostería fresca.";
} else {
    saludoSegunHora = "¡Buenas noches! Mañana te esperamos desde temprano.";
}

console.log(saludoSegunHora);


/* ===========================================================
   CLASE 3
   Funciones
   =========================================================== */

// Function declaration
function armarSaludoCliente(nombreCliente) {
    return `¡Hola, ${nombreCliente}! Gracias por escribirnos a ${nombreDelSitio}.`;
}

// Arrow function
const calcularDescuento = (precio, porcentajeDescuento) => {
    return precio - (precio * porcentajeDescuento) / 100;
};

console.log(armarSaludoCliente("Sofía"));
console.log("Precio con 10% off:", calcularDescuento(precioCafeConLeche, 10));


/* ===========================================================
   CLASE 4
   Arrays y objetos sencillos
   =========================================================== */

const servicios = [
    {
        icono: "☕",
        titulo: "Café de especialidad",
        descripcion: "Granos seleccionados y tostados en el local cada semana.",
    },
    {
        icono: "🥐",
        titulo: "Repostería artesanal",
        descripcion: "Horneamos todos los días: masas, tortas y facturas caseras.",
    },
    {
        icono: "💻",
        titulo: "Espacio para trabajar",
        descripcion: "Wifi rápido, enchufes en cada mesa y un ambiente tranquilo.",
    },
    {
        icono: "🎉",
        titulo: "Eventos privados",
        descripcion: "Alquilamos el salón para cumpleaños, reuniones y presentaciones.",
    },
];

// Recorrer un array con forEach, otro contenido muy típico de esta clase
servicios.forEach((servicio) => {
    console.log(`${servicio.icono} ${servicio.titulo}`);
});


/* ===========================================================
   CLASE 5
   Selección de elementos: querySelector y querySelectorAll
   =========================================================== */

const header = document.querySelector("header");
const botonMenu = document.querySelector("#boton-menu");

const botonVerMas = document.querySelector("#boton-ver-mas");
const textoExtra = document.querySelector("#texto-extra");

const contenedorTarjetas = document.querySelector("#contenedor-tarjetas");

const formularioContacto = document.querySelector("#formulario-contacto");
const campoNombre = document.querySelector("#nombre");
const campoEmail = document.querySelector("#email");
const campoMensaje = document.querySelector("#mensaje");
const mensajeConfirmacion = document.querySelector("#mensaje-confirmacion");

const anioActual = document.querySelector("#anio-actual");

// Ejemplo de querySelectorAll: todos los enlaces del menú de navegación
const enlacesDelMenu = document.querySelectorAll("nav a");
console.log(`El menú tiene ${enlacesDelMenu.length} enlaces.`);


/* ===========================================================
   CLASE 6
   Modificación de texto, clases y atributos
   =========================================================== */

const anioReal = new Date().getFullYear();
anioActual.textContent = anioReal;

// Ejemplo de setAttribute: mejoramos la accesibilidad del botón de menú
botonMenu.setAttribute("aria-expanded", "false");


/* ===========================================================
   CLASE 7
   Eventos: click, submit e input
   =========================================================== */

// Evento "input": se dispara cada vez que el usuario escribe un carácter
campoNombre.addEventListener("input", () => {
    console.log("El campo nombre tiene", campoNombre.value.length, "caracteres");
});

// Evento "submit": se dispara al enviar el formulario (botón o Enter)
formularioContacto.addEventListener("submit", (evento) => {
    evento.preventDefault(); // evita que la página se recargue
    console.log("Se intentó enviar el formulario");
    // La validación real se agrega en la Clase 8
});

// Evento "click" simple, a modo de ejemplo
botonVerMas.addEventListener("click", () => {
    console.log("Se hizo clic en 'Conocer más'");
    // El comportamiento de mostrar/ocultar se completa en la Clase 11
});


/* ===========================================================
   CLASE 8
   Validación básica del formulario
   =========================================================== */

function validarFormulario() {
    let formularioValido = true;

    // Limpiamos los mensajes de error de un intento anterior
    document.querySelector("#error-nombre").textContent = "";
    document.querySelector("#error-email").textContent = "";
    document.querySelector("#error-mensaje").textContent = "";

    // Validación del nombre: no puede estar vacío
    if (campoNombre.value.trim() === "") {
        document.querySelector("#error-nombre").textContent = "Ingresá tu nombre.";
        formularioValido = false;
    }

    // Validación del email: formato básico con expresión regular
    const formatoEmailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formatoEmailValido.test(campoEmail.value.trim())) {
        document.querySelector("#error-email").textContent = "Ingresá un email válido.";
        formularioValido = false;
    }

    // Validación del mensaje: al menos 10 caracteres
    if (campoMensaje.value.trim().length < 10) {
        document.querySelector("#error-mensaje").textContent =
            "Contanos un poco más (mínimo 10 caracteres).";
        formularioValido = false;
    }

    return formularioValido;
}


/* ===========================================================
   CLASE 9
   Mensaje de confirmación al enviar
   =========================================================== */

formularioContacto.addEventListener("submit", (evento) => {
    evento.preventDefault();

    if (validarFormulario()) {
        mensajeConfirmacion.textContent =
            `¡Gracias, ${campoNombre.value.trim()}! Recibimos tu mensaje y te vamos a responder a la brevedad.`;
        mensajeConfirmacion.classList.remove("oculto");
        formularioContacto.reset();
    } else {
        mensajeConfirmacion.classList.add("oculto");
    }
});


/* ===========================================================
   CLASE 10
   Menú móvil
   =========================================================== */

botonMenu.addEventListener("click", () => {
    const estaAbierto = header.classList.toggle("menu-abierto");

    // Mantenemos sincronizado el atributo de accesibilidad que
    // configuramos en la Clase 6
    botonMenu.setAttribute("aria-expanded", estaAbierto ? "true" : "false");
});

// Extra: si el usuario toca un enlace del menú, lo cerramos
enlacesDelMenu.forEach((enlace) => {
    enlace.addEventListener("click", () => {
        header.classList.remove("menu-abierto");
        botonMenu.setAttribute("aria-expanded", "false");
    });
});


/* ===========================================================
   CLASE 11
   Mostrar y ocultar contenido
   =========================================================== */

botonVerMas.addEventListener("click", () => {
    const estaOculto = textoExtra.classList.toggle("oculto");
    botonVerMas.textContent = estaOculto ? "Conocer más" : "Ver menos";
});


/* ===========================================================
   CLASE 12
   Generación de tarjetas a partir de un array de objetos
   =========================================================== */

function generarTarjetasDeServicios() {
    contenedorTarjetas.innerHTML = ""; // limpiamos las tarjetas de ejemplo del HTML

    servicios.forEach((servicio) => {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("tarjeta");

        tarjeta.innerHTML = `
            <h3>${servicio.icono} ${servicio.titulo}</h3>
            <p>${servicio.descripcion}</p>
        `;

        contenedorTarjetas.appendChild(tarjeta);
    });
}

generarTarjetasDeServicios();

console.log("Landing page de", nombreDelSitio, "lista para usar 🚀");
