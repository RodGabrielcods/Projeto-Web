function sair() {
    window.close()
}
function login() {
    window.location.href = "perguntas.html";
}
function tocarMusica() {
    const audio = document.getElementById('musica');
    if (audio.paused) {
        audio.volume = 0.5;
        audio.play();
    }
}