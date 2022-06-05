import {getData} from '../services/services';
function cards () {
  
 class MenuForOneDay {
    constructor (name, description, price, srcImage, altImage, parentSelector, ...classes) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.srcImage = srcImage;
        this.altImage = altImage;
        this.currency = 34;
        this.classes = classes; 
        this.changeToUAH();
        this.parentSelector = document.querySelector(parentSelector);
        this.alt = this.changeNameToAlt(srcImage);
    }

    if (srcImage = null || srcImage == '' ) {
        this.srcImage = this.altImage;
    }

    changeToUAH() {
        this.price = +Math.floor(this.price * this.currency);
    }

    changeNameToAlt (src) { 
        let dirDelete = src.substring(13, 9);
        return dirDelete;
    }

    render () {
        const element = document.createElement('div'); 
        if (this.classes.length === 0) {
            this.element = 'menu__item';
            element.classList.add(this.element);
        } else {
            this.classes.forEach(className => { 
                element.classList.add(className);
            });
        }
       
        element.innerHTML = `
          
                <img src="${this.srcImage}" alt="${this.alt}">
                <h3 class="menu__item-subtitle">Меню "${this.name}"</h3>
                <div class="menu__item-descr">Меню "${this.name}" - ${this.description}!</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
          
        `; 
        this.parentSelector.append(element);
     }

    }
    
    //Axios get v1
         axios.get('http://localhost:3000/menu')
         .then(data => { 
             data.data.forEach((objMenu) => {
                 new MenuForOneDay(objMenu.title, 
                             objMenu.descr, objMenu.price, objMenu.img, objMenu.altImage, '.menu .container', 'menu__item')//'menu__item' пустое можем по Rest добавлять сколько угодно классов css
                 .render(); 
             });
         });

    
        //backend v2
       getData('http://localhost:3000/menu') 
       .then(data => { 
    }
    ); 
}

export default cards; 