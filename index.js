

let ReemplazoEncriptar = /a|e|i|o|u/g;
let ReemplazoDesencriptar = /ai|enter|imes|ober|ufat/g;

function TextoEncriptado(elemento,texto){
    let TextoEncriptado = document.getElementById(elemento);
    TextoEncriptado.innerHTML = texto;
}

function TextoAEncriptar(){
    return document.getElementById('TextoEncriptar').value;
}  

function CodigoEncriptacion(){
    return Encriptar = {
        a:'ai',
        e:'enter',
        i:'imes',
        o:'ober',
        u:'ufat',
    }
}

function CodigoDesencriptacion(){
    return Encriptar = {
        ai:'a',
        enter:'e',
        imes:'i',
        ober:'o',
        ufat:'u'
    }
    
}

function MostrarOcultar(){
    document.getElementById('Resultado').style.display = 'block';
    document.getElementById('SinEncriptacion').style.display = 'none';
}

function EncriptarBoton(){

    if(TextoAEncriptar() === ''){
        alert('Ingrese un texto a encriptar');
    }
    else {

        MostrarOcultar();

        TextoEncriptado('Texto',(TextoAEncriptar().toLowerCase().replaceAll(ReemplazoEncriptar, (matched) =>{
           return CodigoEncriptacion()[matched];
        })))

       
    }
    
}

function DesencriptarBoton(){

    if(TextoAEncriptar() === ''){
        alert('Ingrese un texto a desencriptar');
    }
    else{

        MostrarOcultar();

        TextoEncriptado('Texto',(TextoAEncriptar().toLowerCase().replaceAll(ReemplazoDesencriptar, (matched) =>{
            return CodigoDesencriptacion()[matched];
        })))
    }
    
}


function CopiarTexto(){

    let Copiar = document.getElementById('Texto').value;
    navigator.clipboard.writeText(Copiar);
    console.log(Copiar);

    if(Copiar === ''){
        alert('No hay texto para copiar');
    }
    else{
        alert('Texto copiado al portapapeles');
    }

}

function LimpiarTexto(){
    TextoEncriptado('Texto', '');
    document.getElementById('TextoEncriptar').value = '';
    document.getElementById('SinEncriptacion').style.display = 'block';
    document.getElementById('Resultado').style.display = 'none';
}


function validarEntrada(input) {
    const regex = /^[a-zA-Z0-9\s]*$/;

    input.value = input.value.replace(/[^a-zA-Z0-9\s]/g, '');
}