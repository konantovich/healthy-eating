
import {closeModal, openModal} from './modal';
import {postData} from '../services/services'; 

function forms (timeToOpenModal) {

        const forms = document.querySelectorAll('form');

        const message = {
            loading: "img/form/Spinner-1s-200px.svg",
            success: "Спасибо! Скоро с вами свяжемся",
            failure: "Что-то пошло не так..."
        };

        forms.forEach(form => {
            bindPostData(form);
        });

 
        function bindPostData(form){
            form.addEventListener('submit', (e) => { 
                    e.preventDefault(); //cancel refresh dom

                    const statusMessage = document.createElement('img');
                    statusMessage.src = message.loading;
                    statusMessage.style.cssText = ` 
                        display: block; 
                        margin: 0 auto;
                        background-color: #fff;
                        height: 5%; 
                        width: 5%;
                        margin-top: 3%;
                    `; 
                   form.insertAdjacentElement('afterend', statusMessage); 

                      const formData = new FormData(form);  
                    const json = JSON.stringify(Object.fromEntries(formData.entries())); 

                    postData('http://localhost:3000/requests', json)
                     
                      .then(data => { 
                              console.log(data);
                            statusMessage.remove();
                            closeModal('.modal');
                            showThanksModal(message.success);
                      }).catch(() => { 
                          showThanksModal(message.failure);
                           statusMessage.remove();
                           setTimeout(() => {
                               openModal('.modal', );
                           }, 3000);
                      }).finally(() => {
                        form.reset();
                      });
                    
            }); 
        }

        function showThanksModal (message) {
            const prevModalDialog = document.querySelector('.modal__dialog');
           prevModalDialog.classList.add('hide'); 
           openModal('.modal', timeToOpenModal);
           
           const thanksModal = document.createElement('div');
           thanksModal.classList.add('.modal__dialog');
           thanksModal.innerHTML = `
           <div class="modal__content"> 
                <div class="modal__close" data-close >&times;</div>
                <div class="modal__title">${message}</div>
           </div>
           `;
           document.querySelector('.modal').append(thanksModal);

            setTimeout(() => {
                thanksModal.remove(); 
                prevModalDialog.classList.add('show');
                prevModalDialog.classList.remove('hide');
                closeModal('.modal');
            }, 3000);
    }


}


export default forms;