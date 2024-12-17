function login() {
    window.location.href = 'index.html';
}

function result() {
    window.location.href = 'resul.html';
}
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

    let porcAranha = (contAranha / 4) * 100
    let porcEsqueleto = (contEsqueleto / 4) * 100
    let porcZumbi = (contZumbi / 4) * 100
    let porcCrepper = (contCreeper / 4) * 100

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

    let contador = 5; 
    let contadorElemento = document.querySelector('.contador p');
    contadorElemento.textContent = `Redirecionando em ${contador} segundos...`;

    let intervalo = setInterval(() => {
        contador--;
        contadorElemento.textContent = `Redirecionando em ${contador} segundos...`;

        if (contador === 0) {
            clearInterval(intervalo);
            window.open(pagina + ".html")
        }
    }, 1000);
}