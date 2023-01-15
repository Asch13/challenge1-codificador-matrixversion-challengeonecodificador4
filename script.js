//a se reemplaza por ai
//e se reemplaza por enter
//i se reemplaza por imes
//o se reemplaza por ober
//u se reemplaza por ufat

function encriptar(){
    var texto= document.getElementById("ingresetexto").value.toLowerCase();
    var txtCifrado = texto.replace(/e/img,"enter");
    var txtCifrado = txtCifrado.replace(/o/img,"ober");
    var txtCifrado = txtCifrado.replace(/i/img,"imes");
    var txtCifrado = txtCifrado.replace(/a/img,"ai");
    var txtCifrado = txtCifrado.replace(/u/img,"ufat");

    document.getElementById("Ningúnmensaje").style.display = "none";
    document.getElementById("Ingresetextoenc").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "block";
    document.getElementById("Muñeco").style.display = "none";
}

function desencriptar(){
    var texto= document.getElementById("ingresetexto").value.toLowerCase();
    var txtCifrado = texto.replace(/enter/img,"e");
    var txtCifrado = txtCifrado.replace(/ober/img,"o");
    var txtCifrado = txtCifrado.replace(/imes/img,"i");
    var txtCifrado = txtCifrado.replace(/ai/img,"a");
    var txtCifrado = txtCifrado.replace(/ufat/img,"u");

    document.getElementById("Ningúnmensaje").style.display = "none";
    document.getElementById("Ingresetextoenc").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "block";
    document.getElementById("Muñeco").style.display = "none";
}

function copiar(){
    var contenido = document.querySelector("#Ingresetextoenc");
    contenido.select();
    document.execCommand("copy");
}