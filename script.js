// Funciones para encriptar y desencriptar
function encriptar(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function desencriptar(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

// Función para manejar el botón de encriptar
function manejarEncriptar() {
    const texto = document.querySelector('.caja__de__texto').value;
    const resultado = encriptar(texto);
    mostrarResultado(resultado);

    // Mostrar el botón de copiar cuando se encripta
    const botonCopiar = document.querySelector('.boton__copiar');
    if (resultado.length > 0) {
        botonCopiar.style.display = 'block';
    }
}

// Función para manejar el botón de desencriptar
function manejarDesencriptar() {
    const texto = document.querySelector('.caja__de__texto').value;
    const resultado = desencriptar(texto);
    mostrarResultado(resultado);

    // Ocultar el botón de copiar cuando se desencripta
    document.querySelector('.boton__copiar').style.display = 'none';
}

// Función para mostrar el resultado
function mostrarResultado(resultado) {
    const contenedorResultado = document.querySelector('.contenedor__resultado');
    const textoResultado = document.querySelector('.texto__resultado');
    const contenedorParrafo = document.querySelector('.contenedor__parrafo');
    const contenedorMuneco = document.querySelector('.contenedor__muneco');

    // Mostrar resultado en la sección de resultados
    textoResultado.innerText = resultado;

    // Asegurarse de que el contenedor no se encoja
    contenedorResultado.style.height = 'auto';
    contenedorResultado.style.minHeight = '100px'; // Ajusta según tus necesidades

    // Reemplazar el contenido en el contenedor de párrafo y manejar la visibilidad
    if (resultado.length > 0) {
        contenedorMuneco.style.display = 'none';
        contenedorParrafo.style.display = 'none';
        contenedorResultado.style.display = 'block'; // Asegúrate de que el contenedor de resultados esté visible
    } else {
        contenedorMuneco.style.display = 'block';
        contenedorParrafo.style.display = 'block'; // Mostrar mensaje original
        contenedorResultado.style.display = 'none'; // Ocultar el contenedor de resultados

        // Ocultar el botón de copiar si no hay resultado
        document.querySelector('.boton__copiar').style.display = 'none';
    }
}

// Función para copiar el texto al portapapeles
function copiarAlPortapapeles() {
    const textoResultado = document.querySelector('.texto__resultado').innerText;
    navigator.clipboard.writeText(textoResultado).then(() => {
        // Puedes mostrar una notificación o algún mensaje de confirmación si lo deseas
    });
}

// Eventos de los botones
document.querySelector('.Boton__encriptar').addEventListener('click', manejarEncriptar);
document.querySelector('.Boton__desencriptar').addEventListener('click', manejarDesencriptar);
document.querySelector('.boton__copiar').addEventListener('click', copiarAlPortapapeles);
