    

 function tabs() {

    //TABS
    const tabs = document.querySelectorAll('.tabheader__item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    tabParent = document.querySelector('.tabheader__items');

function hideTabContent() {
    tabsContent.forEach(item => {
 
        item.classList.add('hide');
        item.classList.remove('show'); 
        item.classList.remove('fade'); 
     });
    tabs.forEach(item=> {
        item.classList.remove('tabheader__item_active'); 
    });
    }

    function showTabContent(index = 0) {
        tabsContent[index].classList.add('show'); 
        tabsContent[index].classList.add('fade');
        tabsContent[index].classList.remove('hide');

        tabs[index].classList.add('tabheader__item_active'); 
    }


    tabParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.matches(".tabheader__item")) {
            tabs.forEach((item, index)=> {
                if (target == item) {
                    hideTabContent();
                    showTabContent(index);
                }
            });
        }
        });

        hideTabContent();
        showTabContent();

}


export default tabs; 