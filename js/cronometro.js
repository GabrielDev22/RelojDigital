const cronometro = document.querySelector('.cronometro'),
      iniciar = document.querySelector('.iniciar'),
      reset = document.querySelector('.reset')
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
        console.log('Se hizo click en el boton de inicio')
        cronometrar = true
        iniciar.style.display = 'none'
        pausar.style.display = 'flex'
    })
}

function pausado(){
    pausar.addEventListener('click', () => {
        console.log(`Se hizo click en el boton de pausar`)
        cronometrar = false
        pausar.style.display = 'none'
        iniciar.style.display = 'block'
    })
}

function reiniciar(){
    acumulado = 0
}
console.log(reiniciar())

function formatearMS(tiempo_ms){
    let MS = tiempo_ms % 1000

    let ST = Math.floor(((tiempo_ms - MS) / 1000))

    let S = ST%60
    let M = Math.floor((ST / 60) % 60)
    let H = Math.floor((ST/60 /60 ))
    Number.prototype.ceros = function (n) {
        return (this + '').padStart(n, 0)
    }

    return H.ceros(2) + ":" + M.ceros(2) + ":" + S.ceros(2) + "." + MS.ceros(3)
}

/* const stopwatch = document.getElementById('stopwatch');
const playPauseButton = document.getElementById('play-pause');
const secondsSphere = document.getElementById('seconds-sphere');

let stopwatchInterval;
let runningTime = 0;

const playPause = () => {
    const isPaused = !playPauseButton.classList.contains('running');
    if (isPaused) {
        playPauseButton.classList.add('running');
        start();
    } else {
        playPauseButton.classList.remove('running');
        pause();
    }
}

 const pause = () => {
    secondsSphere.style.animationPlayState = 'paused';
    clearInterval(stopwatchInterval);
}

const stop = () => {
    secondsSphere.style.transform = 'rotate(-90deg) translateX(60px)';
    secondsSphere.style.animation = 'none';
    playPauseButton.classList.remove('running');
    runningTime = 0;
    clearInterval(stopwatchInterval);
    stopwatch.textContent = '00:00';
}

const start = () => {
    secondsSphere.style.animation = 'rotacion 60s linear infinite';
    let startTime = Date.now() - runningTime;
    secondsSphere.style.animationPlayState = 'running';
    stopwatchInterval = setInterval( () => {
        runningTime = Date.now() - startTime;
        stopwatch.textContent = calculateTime(runningTime);
    }, 1000)
}

const calculateTime = runningTime => {
    const total_seconds = Math.floor(runningTime / 1000);
    const total_minutes = Math.floor(total_seconds / 60);

    const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
    const display_minutes = total_minutes.toString().padStart(2, "0");

    return `${display_minutes}:${display_seconds}`
} */



