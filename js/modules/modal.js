
    function openModal(modalWindowSelector, modalOpenTimerId) { 
        const modal = document.querySelector(modalWindowSelector); 

        //   console.dir(modal.classList);
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden'; 

        console.log(modalOpenTimerId);
        if (modalOpenTimerId) 
            clearInterval(modalOpenTimerId); 
        }
       
    

    function closeModal(modalWindowSelector){
        const modal = document.querySelector(modalWindowSelector); 

        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }


function modal (openModalSelector, modalWindowSelector, modalOpenTimerId) {


    const modalOpenTrigger = document.querySelectorAll(openModalSelector);
    const modal = document.querySelector(modalWindowSelector);

    modalOpenTrigger.forEach(btn => {
        btn.addEventListener('click', ()=> {
            openModal(modalWindowSelector, modalOpenTimerId);
          });
      
    });

    modal.addEventListener('click', (event)=>{
        if (event.target === modal || event.target.getAttribute('data-close') == ''){ 
            closeModal(modalWindowSelector); 
            
        } 
    });

    document.addEventListener('keydown', (event)=>{
        if (event.key === "Escape" && modal.classList.contains('show')) { 
            closeModal(modalWindowSelector);
        }
    });

        window.addEventListener('scroll', openModalWhenListToBottomScreen);
        
        function openModalWhenListToBottomScreen() {
            const userScroll = window.pageYOffset; 
            const userVisiblePart = document.documentElement.clientHeight; 
            const fullScrollHeight = document.documentElement.scrollHeight; 
            console.log(fullScrollHeight);
            if (userScroll + userVisiblePart >= fullScrollHeight){
                openModal(modalWindowSelector, modalOpenTimerId);
                window.removeEventListener('scroll', openModalWhenListToBottomScreen); 
            }
        }
   
}

export default modal; 
export {closeModal};
export {openModal};