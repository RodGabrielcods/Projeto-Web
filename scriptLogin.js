function sair() {
    window.close()
}
function login() {
    window.location.href = 'perguntas.html';
}

function tocarMusica() {
    const audio = document.getElementById('musica');
    audio.volume = 0.5;
    audio.play();
}

window.onload = function () {
    const audio = document.getElementById('musica');
    audio.volume = 0.4;
    audio.play().catch(error => {
        console.log("Autoplay bloqueado pelo navegador.");
    });
}