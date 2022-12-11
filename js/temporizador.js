
const getRemainTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays =  Math.floor(remainTime / (3600 * 24));

      return{
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays
      }  
};

const countdown = (deadline, elem, finalMessage) => {

    const contenedor = document.getElementById(elem),
          contenido = document.createElement('div'),
          dias = document.createElement('div'),
          horas = document.createElement('div'),
          minutos = document.createElement('div'),
          segundos = document.createElement('div');

          contenedor.classList.add('contenedor_cuentaRegresiva')
          contenido.classList.add('contenido_cuentaRegresiva')
          dias.classList.add('dias_cuentaRegresiva')
          horas.classList.add('horas_cuentaRegresiva')
          minutos.classList.add('minutos_cuentaRegresiva')
          segundos.classList.add('segundos_cuentaRegresiva')
          

    const timerUpdate = setInterval( () => {
        let t = getRemainTime(deadline);
        dias.innerHTML = `Dias: ${t.remainDays}`
        horas.innerHTML = `Horas: ${t.remainHours}`
        minutos.innerHTML = `Minutos: ${t.remainMinutes}`
        segundos.innerHTML = `Segundos: ${t.remainSeconds}`

       contenido.appendChild(dias)
       contenido.appendChild(horas)
       contenido.appendChild(minutos)
       contenido.appendChild(segundos)

       contenedor.appendChild(contenido)

        if(t.remainTime <= 1){
            clearInterval(timerUpdate);
            el.innerHTML = finalMessage;
        }
    },1000)
};

countdown('Dec 31 2022 19:37:00 GMT-0300', 'clock', 'Ha finalizado Noviembre');