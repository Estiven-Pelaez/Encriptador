function encriptar() {
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();

    var textoEncritado = frase.replace(/e/img, "001");
    var textoEncritado = textoEncritado.replace(/o/img, "500.404.5.--");
    var textoEncritado = textoEncritado.replace(/i/img, "0100%");
    var textoEncritado = textoEncritado.replace(/a/img, "98--");
    var textoEncritado = textoEncritado.replace(/u/img, "31-");
    var textoEncritado = textoEncritado.replace(/b/img, "6650-_11");
    var textoEncritado = textoEncritado.replace(/c/img, "01#");
    var textoEncritado = textoEncritado.replace(/d/img, "65");
    var textoEncritado = textoEncritado.replace(/f/img, ",,-99");
    var textoEncritado = textoEncritado.replace(/g/img, "01");
    var textoEncritado = textoEncritado.replace(/h/img, "--_-");
    var textoEncritado = textoEncritado.replace(/j/img, "15--0251");
    var textoEncritado = textoEncritado.replace(/k/img, "5520");
    var textoEncritado = textoEncritado.replace(/l/img, "4547");
    var textoEncritado = textoEncritado.replace(/m/img, "!58");
    var textoEncritado = textoEncritado.replace(/n/img, "85");
    var textoEncritado = textoEncritado.replace(/ñ/img, "--00---555");
    var textoEncritado = textoEncritado.replace(/p/img, "555611");
    var textoEncritado = textoEncritado.replace(/q/img, "54552--");
    var textoEncritado = textoEncritado.replace(/r/img, ",--e2");
    var textoEncritado = textoEncritado.replace(/s/img, "___9");
    var textoEncritado = textoEncritado.replace(/t/img, "53051");
    var textoEncritado = textoEncritado.replace(/w/img, "-");
    var textoEncritado = textoEncritado.replace(/x/img, "7111");
    var textoEncritado = textoEncritado.replace(/y/img, ".6.55");
    var textoEncritado = textoEncritado.replace(/z/img, "77");
    var textoEncritado = textoEncritado.replace(/k1/img, "707");

    document.getElementById("textoDesencriptado").innerHTML = textoEncritado;
    document.getElementById("botonCopiar").style.display = "inherit";
}


function desencriptar(){

    var frase = document.getElementById("textoEncriptado").value.toLowerCase();

// i = es para tome las letras mayusculas en minusculas
// m = toma en cuenta multiples lineas
// g = tome en cuanta toda la linea de oracion 

    var textoEncritado = frase.replace(/001/img, "e");
    var textoEncritado = textoEncritado.replace(/500.404.5.--/img, "o");
    var textoEncritado = textoEncritado.replace(/0100%/img, "i");
    var textoEncritado = textoEncritado.replace(/98--/img, "a");
    var textoEncritado = textoEncritado.replace(/31-/img, "u");
    var textoEncritado = textoEncritado.replace(/6650-_11/img, "b");
    var textoEncritado = textoEncritado.replace(/01#/img, "c");
    var textoEncritado = textoEncritado.replace(/65/img, "d");
    var textoEncritado = textoEncritado.replace(/,,-99/img, "f");
    var textoEncritado = textoEncritado.replace(/01/img, "g");
    var textoEncritado = textoEncritado.replace(/--_-/img, "h");
    var textoEncritado = textoEncritado.replace(/15--0251/img, "j");
    var textoEncritado = textoEncritado.replace(/5520/img, "k");
    var textoEncritado = textoEncritado.replace(/4547/img, "l");
    var textoEncritado = textoEncritado.replace(/!58/img, "m");
    var textoEncritado = textoEncritado.replace(/85/img, "n");
    var textoEncritado = textoEncritado.replace(/--00---555/img, "ñ");
    var textoEncritado = textoEncritado.replace(/555611/img, "p");
    var textoEncritado = textoEncritado.replace(/54552--/img, "q");
    var textoEncritado = textoEncritado.replace(/,--e2/img, "r");
    var textoEncritado = textoEncritado.replace(/___9/img, "s");
    var textoEncritado = textoEncritado.replace(/53051/img, "t");
    var textoEncritado = textoEncritado.replace(/-/img, "w");
    var textoEncritado = textoEncritado.replace(/7111/img, "x");
    var textoEncritado = textoEncritado.replace(/.6.55/img, "y");
    var textoEncritado = textoEncritado.replace(/77/img, "z");
    var textoEncritado = textoEncritado.replace(/707/img, "k1");

    document.getElementById("textoDesencriptado").innerHTML = textoEncritado;
}

function copiar(){

    var contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy"); 
}