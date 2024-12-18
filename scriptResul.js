function login() {
    window.open('perguntas.html')
    window.close()
}

let contAranha = localStorage.getItem('aranha')
let contCreeper = localStorage.getItem('creeper')
let contEsqueleto = localStorage.getItem('esqueleto')
let contZumbi = localStorage.getItem('zumbi')

let porcAranha = (contAranha / 10) * 100
let porcEsqueleto = (contEsqueleto / 10) * 100
let porcZumbi = (contZumbi / 10) * 100
let porcCrepper = (contCreeper / 10) * 100

document.querySelector('#esqueleto-td').textContent = `${porcEsqueleto}%`
document.querySelector('#aranha-td').textContent = `${porcAranha}%`
document.querySelector('#creeper-td').textContent = `${porcCrepper}%`
document.querySelector('#zumbi-td').textContent = `${porcZumbi}%`