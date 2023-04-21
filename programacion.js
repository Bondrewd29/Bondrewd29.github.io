
function limpiar (){
    document.querySelector(".ingreso-texto").value="";
}

function validar(e){
    key = e.keyCode || e.which;
    tecla= String.fromCharCode(key).toString();
    letras = "abcdefghijklmnñopqrstuvwxyz";

    especiales = [32, 8];
    tecla_especial =false;
    for (var i in especiales){
        if (key == especiales [i]){
            tecla_especial=true;
            break;
        }
    }

    if(letras.indexOf(tecla)== -1 && !tecla_especial)
    {
        alert("ingrese solo letras sin acento");
        return false;
    }
}

function encriptar (){
    var mensaje = document.querySelector(".ingreso-texto").value;
    var mensajeEncriptado = mensaje.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".mensaje-salida").value = mensajeEncriptado;
    document.getElementById('salida').style.backgroundImage="none";
  
    limpiar();
    
}

var boton1 = document.querySelector(".boton-encriptar");
    boton1.onclick = encriptar;
    


function desencriptar (){
    var mensaje = document.querySelector(".ingreso-texto").value;
    var mensajeEncriptado = mensaje.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");
    document.querySelector(".mensaje-salida").value = mensajeEncriptado;
    document.getElementById('salida').style.backgroundImage="none";
  
    limpiar();
}

var boton2 = document.querySelector(".boton-desencriptar");
boton2.onclick = desencriptar;

function copiarTexto() {

    var content = document.getElementById('salida');
    
    content.select();
    document.execCommand('copy');
  
}
var boton3 = document.querySelector(".boton-copiar");
boton3.onclick = copiarTexto;