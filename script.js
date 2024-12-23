function tocarMusica() {
    const audio = document.getElementById('musica');
    if (audio.paused) {
        audio.volume = 0.5;
        audio.play();
    }
}

const radios = document.querySelectorAll('input[type="radio"]');
const somClick = document.getElementById('som-click');

radios.forEach(radio => {
    radio.addEventListener('click', () => {
        if (somClick) {
            somClick.currentTime = 0;
            somClick.volume = 1;
            somClick.play().catch(error => {
                console.error("Erro ao reproduzir o som-click:", error);
            });
        }
    });
});

function testar() {
    let contEsqueleto = 0
    let contCreeper = 0
    let contAranha = 0
    let contZumbi = 0

    let radios = document.querySelectorAll('input[type="radio"]')

    console.log(radios)

    radios.forEach(e => {
        if (e.checked) {
            if (e.value == "esqueleto") {
                contEsqueleto++
            } else if (e.value == "zumbi") {
                contZumbi++
            } else if (e.value == "aranha") {
                contAranha++
            } else if (e.value == "creeper") {
                contCreeper++
            }
        }
    })

    localStorage.setItem('aranha', contAranha)
    localStorage.setItem('esqueleto', contEsqueleto)
    localStorage.setItem('zumbi', contZumbi)
    localStorage.setItem('creeper', contCreeper)

    let maior = 0
    let pagina

    if (contAranha > maior) {
        pagina = "aranha"
        maior = contAranha
    }

    if (contCreeper > maior) {
        pagina = "creeper"
        maior = contCreeper
    }

    if (contEsqueleto > maior) {
        pagina = "esqueleto"
        maior = contEsqueleto
    }

    if (contZumbi > maior) {
        pagina = "zumbi"
        maior = contZumbi
    }

    if (contAranha + contCreeper + contEsqueleto + contZumbi == 10) {
        let contador = 5;
        let contadorElemento = document.querySelector('.contador p');
        contadorElemento.textContent = `Redirecionando em ${contador} segundos...`;

        let intervalo = setInterval(() => {
            contador--;
            contadorElemento.textContent = `Redirecionando em ${contador} segundos...`;

            if (contador === 0) {
                clearInterval(intervalo);
                window.location.href = pagina + ".html";
            }
        }, 1000)
    } else {
        alert("Responda todas as perguntas!")
    }
}