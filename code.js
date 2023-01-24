function codificar() {
    let textoentrada = document.getElementById("entrada").value.toLowerCase();
    let cifrado = textoentrada.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    // si no se hace en este orden, no sirve

    document.getElementById("salida").value = cifrado;
    document.getElementById("entrada").value = "";
    // esta linea limpia el textarea
}

function decodificar() {
    let textosalida = document.getElementById("salida").value.toLowerCase();
    let decifrado = textosalida.replace(/ai/g, "a").replace(/enter/g, "e").replace(/ober/g, "o").replace(/ufat/g, "u").replace(/imes/g, "i");

    document.getElementById("entrada").value = decifrado;
    document.getElementById("salida").value = "";
}

function copiar0() {
    const entrada = document.getElementById("entrada");
    entrada.select();
    document.execCommand("copy");
}

function copiar1() {
    const salida = document.getElementById("salida");
    salida.select();
    document.execCommand("copy");
}