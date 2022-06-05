

function calculatorCalory () {

    ///////CALCULATOR  CALORY
    const result = document.querySelector('.calculating__result span');

     const defaultDataRatio = document.querySelector('#small');

     let gender, height, weight, age, ratio;

    if (localStorage.getItem('ratio')) { 
        ratio = localStorage.getItem('ratio');
    } else { 
        ratio = +defaultDataRatio.getAttribute('data-ratio');
        localStorage.setItem('ratio', ratio);
    }

    if (localStorage.getItem('gender')) {
        gender = localStorage.getItem('gender');
    } else { 
        gender = 'female';
        localStorage.setItem('gender', gender);
    }

      
        function firstStartInitLocalSettings (selector, activeClass) {
            const elements = document.querySelectorAll(selector);
            
            elements.forEach(elem => {
                elem.classList.remove(activeClass);
                if (elem.getAttribute('id') === localStorage.getItem('gender')) {
                    elem.classList.add(activeClass);
                } else if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                    elem.classList.add(activeClass);
                }
                
            });    
        }
        firstStartInitLocalSettings('#gender div', 'calculating__choose-item_active');  
        firstStartInitLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');


    //Formula
    function calcTotal () {
            if (!gender || !height || !weight || !age || !ratio){
                result.textContent = "----";
                return; 
            }
            if (gender === 'female') {
                result.textContent = Math.floor((447.6 + (height * 3.1) + (weight * 9.2) - (4.3 * age)) * ratio);
            } else {
                result.textContent = Math.floor((88.36 + (4.8 * height) + (13.4 * weight)  - (5.7 * age)) * ratio);
            }
    }

    function yourHeightWeghtAge (selector) {
        const input = document.querySelector(selector);

             input.addEventListener('input', item => {
                if  (input.value.match(/\D/g)) {
                    input.value = input.value.replace (/\D/g, '');
                    input.style.border = '1px solid red';
                } else {
                    input.style.border = 'none';
                }
        
          //   console.log(elements.id);
             switch (input.getAttribute('id')) {
                 case 'height':
                    height = +input.value;
                  //  console.log(height)
                    break;
                case 'weight':
                    weight = +input.value;
                    break;
                case 'age':
                    age = +input.value;
                    break;      
             } 
             calcTotal();
        });
    }

    function getStaticInformation (selector, activeClass) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(elem => {
          
            elem.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio'); 
                    localStorage.setItem('ratio', ratio); 
                } else {
                    gender = e.target.getAttribute('id');
                    localStorage.setItem('gender', gender);
                }
              // console.log(ratio, gender);
                elements.forEach(elem => { 
                    elem.classList.remove(activeClass);
                });
                if (e.target != document.querySelector('.calculating__choose_big') && e.target != document.querySelector('#gender' ) ) {
                    e.target.classList.add(activeClass); 
                }
                calcTotal();
            });
        });
    }


    getStaticInformation('#gender div', 'calculating__choose-item_active'); 
    getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');
    yourHeightWeghtAge ('#height');
    yourHeightWeghtAge ('#weight');
    yourHeightWeghtAge ('#age');
    calcTotal();
}


export default calculatorCalory; 