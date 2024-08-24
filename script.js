const campoDeTexto = document.querySelector('.campo-texto');
const mensagem = document.querySelector('.mensagem');
let musicaTocando = false;

function tocarMusica() {
    let audio = document.getElementById('musica'); 
    if (musicaTocando == false) {
        audio.play() 
        musicaTocando = true;
    } else 
    if (musicaTocando == true) {
        audio.pause()
        musicaTocando = false;
    }
}

function btEncriptar() {
    const textoEncriptado = encriptar(campoDeTexto.value);
    mensagem.value = textoEncriptado;
    campoDeTexto.value = '';
    document.querySelector('.mario').style.display = "none";
}

function btDescriptografar() {
    const textoDescriptografado = descriptografar(campoDeTexto.value);
    mensagem.value = textoDescriptografado;
    campoDeTexto.value = '';
    document.querySelector('.mario').style.display = "none";
}

function btLimpar(){
    campoDeTexto.value = '';
    mensagem.value = '';
    document.querySelector('.mario').style.display = "block";
}

function btCopiar() {
    const copiarTexto = document.querySelector('.mensagem').value;
    navigator.clipboard.writeText(copiarTexto);
    mensagem.value = ''
    document.querySelector('.mario').style.display = "block";
}

function encriptar(stringEncriptada) {

    let matrizCodigo = [
        ['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']
    ]
    stringEncriptada = stringEncriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }

    }
    return stringEncriptada;
}

function descriptografar(stringdescriptografada) {

    let matrizCodigo = [
        ['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']
    ]
    stringdescriptografada = stringdescriptografada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringdescriptografada.includes(matrizCodigo[i][1])) {
            stringdescriptografada = stringdescriptografada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }

    }
    return stringdescriptografada;
}
