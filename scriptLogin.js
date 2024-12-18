function sair() {
    window.close()
}
function login() {
    window.open('perguntas.html')
    window.close()
}

function tocarMusica() {
    const audio = document.getElementById('musica');
    audio.muted = false;
    audio.volume = 0.5;
    audio.play();
}