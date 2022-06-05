
    //  const firstMenu = new MenuForOneDay(
    //     'Фитнес', 
    //     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 
    //     6.74, 
    //     'img/tabs/vegy.jpg', 
    //     'img/tabs/vegy.jpg', 
    //     '.menu .container', 
    //     'menu__item', //так как он идет через массив, по этому без точки пишем
    //     'big'
    //     );firstMenu.render();

    // const secondMenu = new MenuForOneDay(
    //     'Премиум', 
    //     'Меню "Премиум" - В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', 
    //     16, 
    //     'img/tabs/elite.jpg', 
    //     'img/tabs/elite.jpg', 
    //     '.menu .container',
    //     'menu__item'
    //     );secondMenu.render();

    // const thirdMenu = new MenuForOneDay(
    //     'Постное', 
    //     'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.', 
    //     12.6, 
    //     'img/tabs/post.jpg', 
    //     'img/tabs/post.jpg', 
    //     '.menu .container',
    //     'menu__item' 
    //     ); thirdMenu.render();





     function addCard (data) {
        data.forEach((objMenu) => {

            const element = document.createElement('div'); 

            element.classList.add('menu__item');

            element.innerHTML = `
                  
            <img src="${objMenu.img}" alt="${objMenu.altImage}">
            <h3 class="menu__item-subtitle">Меню "${objMenu.title}"</h3>
            <div class="menu__item-descr">Меню "${objMenu.title}" - ${objMenu.descr}!</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${objMenu.price}</span> грн/день</div>
            </div
                `;  
            document.querySelector('.menu .container').append(element);
        }); 
       }
       //addCard(data); //data которая отсерва прийдет



       //  СЛАЙДЕР ПРОСТОЙ ВАРИАНТ МОЙ

//        <div class="offer__slider">
//        <div class="offer__slider-counter">
//            <div class="offer__slider-prev">
//                <img src="icons/left.svg" alt="prev">
//            </div>
//            <span id="current">03</span>
//            /
//            <span id="total">04</span>
//            <div class="offer__slider-next">
//                <img src="icons/right.svg" alt="next">
//            </div>
//        </div>
//        <div class="offer__slider-wrapper">
//            <div class="offer__slide">
//                <img src="img/slider/pepper.jpg" alt="pepper">
//            </div>
//            <div class="offer__slide">
//                <img src="img/slider/food-12.jpg" alt="food">
//            </div>
//            <div class="offer__slide">
//                <img src="img/slider/olive-oil.jpg" alt="oil">
//            </div>
//            <div class="offer__slide">
//                <img src="img/slider/paprika.jpg" alt="paprika">
//            </div>
//        </div>
//    </div>

       const sliderImgs = document.querySelectorAll('.offer__slide');

    const sliderPrev = document.querySelector('.offer__slider-prev');
    const sliderNext = document.querySelector('.offer__slider-next');

    const sliderCurrent = document.querySelector('.offer__slider #current');
    const sliderTotal = document.querySelector('.offer__slider #total');

    let index = 0;
    let currentIndex = 1;

    sliderTotal.innerHTML = addZeroToNumber(sliderImgs.length);

    sliderImgs.forEach(sliderImg => {
        sliderImg.style.display = 'none';

    });

    sliderNext.addEventListener('click', () => {
        
        if (index >= sliderImgs.length - 1) {
            index == sliderImgs.length - 1;
            currentIndex = sliderImgs.length;
            sliderImgs[index].style.display = 'none';
        } else {
            sliderImgs[index].style.display = 'none';
            index++;
            currentIndex++;
        }
        sliderList(index);
    });

    sliderPrev.addEventListener('click', () => {
        if (index <= 0) {
            index == 0;
            currentIndex == 0;
            sliderImgs[index].style.display = 'none';
        } else {
            console.log('click');
          
            index--;
            currentIndex--;
            sliderImgs[index].style.display = 'none';
        }
        sliderList();
    });

    function sliderList () {

        sliderImgs[index].style.display = 'block';
        sliderCurrent.innerHTML = addZeroToNumber(currentIndex);
    }
    
    function addZeroToNumber (number) {
        if (+number < 10) {
            return `0${number}`;
        } else {
            return `${number}`;
        }
    }

    sliderList();