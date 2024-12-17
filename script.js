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
        if(e.checked) {
            if(e.value == "esqueleto") {
                contEsqueleto++
            } else if(e.value == "zumbi") {
                contZumbi++
            } else if(e.value == "aranha") {
                contAranha++
            }  else if(e.value == "creeper") {
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

    if(contAranha > maior) {
        pagina = 'aranha'
        maior = contAranha
    } else if (contCreeper > maior) {
        pagina = 'creeper'
        maior = contCreeper
    } else if (contEsqueleto > maior) {
        pagina = 'esqueleto'
        maior = contEsqueleto
    } else if (contZumbi > maior) {
        pagina = 'zumbi'
        maior = contZumbi
    }

    setTimeout(() => {
        window.open(pagina + '.html')
    }, 5000);
}