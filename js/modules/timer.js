

function timer () {

    //TIMER 

    const deadline = '2022-08-29'; 

    function getTimeRemainig(endtime) { 
        let t = Date.parse(endtime);  
         t = t - Date.parse(new Date()); 
         const days = Math.floor(t / (1000 * 60 * 60 * 24)), 
                hours = Math.floor((t / (1000 * 60 * 60) % 24)),
                minutes = Math.floor((t / 1000 / 60) % 60),
                seconds =  Math.floor((t / 1000) % 60);
            
            return {
                'totalMs': t,   
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
                 
            };
    }

  
    function addZero(num) {
        if (num >=0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

   
    function setClock (selector, endTime) {
        const timer = document.querySelector(selector),
                days = timer.querySelector('#days'),
                hours = timer.querySelector('#hours'),
                minutes = timer.querySelector('#minutes'),
                seconds = timer.querySelector('#seconds'),
                timeInterval = setInterval(updateClock, 1000); 

                updateClock();

        function updateClock () {

            const t = getTimeRemainig(endTime); 

          
            days.innerHTML = addZero(t.days);;
            hours.innerHTML = addZero(t.hours);
            minutes.innerHTML = addZero(t.minutes);
            seconds.innerHTML = addZero(t.seconds);

            
            if (t.totalMs <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock('.timer', deadline);
}


export default timer; 