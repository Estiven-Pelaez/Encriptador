function encriptar(){

    var frase = document.getElementById("textoEncriptado").value.toLowerCase();

// i = es para tome las letras mayusculas en minusculas
// g = tome en cuanta toda la linea de oracion 
// m = toma en cuenta multiples lineas

    var textoEncritado = frase.replace(/e/img, "enter");
    var textoEncritado = textoEncritado.replace(/o/img, "ober");
    var textoEncritado = textoEncritado.replace(/i/img, "imes");
    var textoEncritado = textoEncritado.replace(/a/img, "ai");
    var textoEncritado = textoEncritado.replace(/u/img, "ufat");

    document.getElementById("textoDesencriptado").innerHTML = textoEncritado;
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";
   
}

function desencriptar(){

    var frase = document.getElementById("textoEncriptado").value.toLowerCase();

// i = es para tome las letras mayusculas en minusculas
// g = tome en cuanta toda la linea de oracion 
// m = toma en cuenta multiples lineas

    var textoEncritado = frase.replace(/enter/img, "e");
    var textoEncritado = textoEncritado.replace(/ober/img, "o");
    var textoEncritado = textoEncritado.replace(/imes/img, "i");
    var textoEncritado = textoEncritado.replace(/ai/img, "a");
    var textoEncritado = textoEncritado.replace(/ufat/img, "u");

    document.getElementById("textoDesencriptado").innerHTML = textoEncritado;
}

function copiar(){

    var contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy"); 
}