const cronometro = document.querySelector('.cronometro'),
      iniciar = document.querySelector('.iniciar'),
      pausar = document.querySelector('.pausar');

let tiempoRef = Date.now()
let cronometrar = false
let contador = 0      

setInterval(() => {
    let tiempo = document.getElementById('tiempo')
    if(cronometrar){
        contador += Date.now() - tiempoRef
    }

    tiempoRef = Date.now()
    tiempo.innerHTML = formatearMS(contador)

},1000 / 60);

function inicio(){
    iniciar.addEventListener('click', () => {
        cronometrar = true
        iniciar.style.display = 'none'
        pausar.style.display = 'flex'
    })
}

function pausado(){
    pausar.addEventListener('click', () => {
        cronometrar = false
        pausar.style.display = 'none'
        iniciar.style.display = 'block'
    })
}

function reiniciar(){
    contador = 0
}

function formatearMS(tiempo_ms){
    let MS = tiempo_ms % 1000

    let ST = Math.floor(((tiempo_ms - MS) / 1000))

    let S = ST%60
    let M = Math.floor((ST / 60) % 60)
    let H = Math.floor((ST/60 /60 ))
    Number.prototype.ceros = function (n) {
        return (this + '').padStart(n, 0)
}

return `${H.ceros(2)} : ${M.ceros(2)} : ${S.ceros(2)}`
}



