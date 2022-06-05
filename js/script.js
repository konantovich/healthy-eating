require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill'; 

import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards'; 
import calculator from './modules/calculator';
import slider from './modules/slider';
import forms from './modules/forms';
import {openModal} from './modules/modal';

//JSON DB:
//npx json-server /Applications/MAMP/htdocs/healthy-eating/db.json

//Webpack
//cd /Applications/MAMP/htdocs/healthy-eating
//npx webpack

window.addEventListener('DOMContentLoaded', () => {

    //CommonJS
    // const tabs = require('./modules/tabs'),
    //         modal = require('./modules/modal'),
    //         timer = require('./modules/timer'),
    //         cards = require('./modules/cards'), 
    //         calculator = require('./modules/calculator'),
    //         slider = require('./modules/slider'),
    //         forms = require('./modules/forms');

 
     
      const timeToOpenModal = setTimeout(() => openModal('.modal', timeToOpenModal), 10000);

  

    
    modal('[data-modal]', '.modal', timeToOpenModal);
    tabs();
    timer();
    cards();
    calculator();
    slider();
    forms(timeToOpenModal);

}); 