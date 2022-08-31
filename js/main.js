/* (function(){
    let actualizarHora = function () {
        var fecha = new Date(),
        ampm,
        hora = fecha.getHours(),
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds(),
        diaSemana = fecha.getDay(),
        dia = fecha.getDate(),
        mes = fecha.getMonth(),
        year = fecha.getFullYear();

        const pHoras = document.querySelector(".hora"),
        pMinutos = document.querySelector('.minuto'),
        pSegundos = document.querySelector('.segundos'),
        pAmpm = document.querySelector('.ampm'),
        pSemana = document.querySelector('.semana'),
        pDia = document.querySelector('.dia'),
        pMes = document.querySelector('.mes'),
        pYear = document.querySelector('.year');
        
        pDia.textContent = dia 
        let semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes',' Sabado']

        pSemana.textContent = semana [diaSemana]
        
        let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

        pMes.textContent = meses [mes];
        pYear.textContent = year;

        if( hora >= 12){
            hora = hora - 12;
            ampm = 'PM';
        }else {
            ampm = 'AM';
        }

        if( hora == 0){
            hora = 12;
        }

        pHoras.textContent = hora;
        pAmpm.textContent = ampm;

        if(hora < 10){hora = "0" + hora}
        if(minutos < 10){minutos = "0" + minutos };
        if(segundos < 10){ segundos = "0" + segundos};
        
        pMinutos.textContent = minutos;
        pSegundos.textContent = segundos;
        
    }
    actualizarHora();
    const intervalo = setInterval(actualizarHora, 1000);
}()) */

(function(){
    let actualizarHora = function(){
        var fecha = new Date(),
            ampm,
            hora = fecha.getHours(),
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            diaSemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            year = fecha.getFullYear();

        const pHoras = document.querySelector(".hora"),
            pMinutos = document.querySelector('.minuto'),
            pSegundos = document.querySelector('.segundos'),
            pAmpm = document.querySelector('.ampm'),
            pSemana = document.querySelector('.semana'),
            pDia = document.querySelector('.dia'),
            pMes = document.querySelector('.mes'),
            pYear = document.querySelector('.year');

         pDia.textContent = dia

         let semana = ['domingo', 'lunes', 'martes', 'miercoles', ' jueves', 'viernes', 'sabado'];

         pSemana.textContent = semana [diaSemana]
         
         let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
         
         pMes.textContent = meses [mes]
         pYear.textContent = year

         if(hora >= 12){
            hora = hora - 12;
            ampm = 'PM'
         } else {
            ampm = 'AM'
         }

        if(hora == 0){
            hora = 12;
        }

        pHoras.textContent = hora
        pAmpm.textContent = ampm

        if(minutos < 10){minutos = '0' + minutos }
        if(segundos < 10){segundos = '0' + segundos }

        pMinutos.textContent = minutos
        pSegundos.textContent = segundos
    
    }
    actualizarHora();
    let intervalo = setInterval(actualizarHora, 1000)
}());




