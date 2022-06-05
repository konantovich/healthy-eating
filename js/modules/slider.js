



function slider () {

     const sliderImgs = document.querySelectorAll('.offer__slide');
     const fullSlider = document.querySelector('.offer__slider');
 
     const sliderPrev = document.querySelector('.offer__slider-prev');
     const sliderNext = document.querySelector('.offer__slider-next');
 
     const sliderCurrent = document.querySelector('.offer__slider #current');
     const sliderTotal = document.querySelector('.offer__slider #total');
     const slideWrapper = document.querySelector('.offer__slider-wrapper');
     const slideInner = document.querySelector('.offer__slider-inner');
     const width = window.getComputedStyle(slideWrapper).width; 
 
     let indexCurrent = 1;
     let slideOffset = 0;
 
     slideInner.style.width = 100 * sliderImgs.length + '%'; 
     slideInner.style.display = 'flex';
     slideInner.style.transition = '0.5s all'; 
     slideWrapper.style.overflow = 'hidden'; 
 
     sliderImgs.forEach(slide => {
         slide.style.width = width; 
     });
     console.log(sliderImgs.length);
             //Total and current index
         if (sliderImgs.length < 10) {
             sliderTotal.textContent = `0${sliderImgs.length}`;
             sliderCurrent.textContent = `0${indexCurrent}`;
             console.log('dasdasd',indexCurrent);
         } else {
             setTimeout(()=>{
                 sliderCurrent.textContent = `0${indexCurrent}`;
                 sliderTotal.textContent = sliderImgs.length;
             }, 5);
            
         }
 
         function addOutputIndexCurrent () {
             if (indexCurrent < 10) { 
                 sliderCurrent.textContent = `0${indexCurrent}`;
             } else {
                 sliderCurrent.textContent = indexCurrent;
             } 
         }
         function changeOpacityToPoint() {
             arrPoints.forEach(point => { point.style.opacity = '0.5'; }); 
             arrPoints[indexCurrent - 1].style.opacity = '1';
         }
 
         function deleteNotNumbers (str) {
             return  +str.replace(/\D/g, '');
         }
         
         //Next button
      sliderNext.addEventListener('click', () => { 
        
         if (slideOffset == deleteNotNumbers(width) * (sliderImgs.length - 1)) { 
             slideOffset = 0; 
         } else {
             slideOffset += deleteNotNumbers(width) ; 
         }
         slideInner.style.transform = `translateX(-${slideOffset}px)`; 
         if (indexCurrent == sliderImgs.length) { 
             indexCurrent = 1;
         } else {
             indexCurrent++; 
         }
         
         addOutputIndexCurrent ();
         changeOpacityToPoint();
      });
 
         //Previus button
      sliderPrev.addEventListener('click', () => {     
          console.log(indexCurrent);  
         if (slideOffset == 0) { 
             slideOffset = deleteNotNumbers(width) * (sliderImgs.length - 1);
         } else {
             slideOffset -= deleteNotNumbers(width);
         }
         slideInner.style.transform = `translateX(-${slideOffset}px)`; 
 
         if (indexCurrent == 1) {
             indexCurrent = sliderImgs.length;
         } else {
             indexCurrent--;
         }
 
         addOutputIndexCurrent ();
         changeOpacityToPoint();
      });
 

      const pointsOnSlider = document.createElement('ol'),
             arrPoints = [];
      pointsOnSlider.classList.add('point-indicators');
      fullSlider.style.position = 'relative'; 
      fullSlider.append(pointsOnSlider);
    
     for (let i = 0; i < sliderImgs.length; i++) {
        const point = document.createElement('li'); 
        point.setAttribute('data-slide-to', i + 1);
        point.classList.add('point'); 
        pointsOnSlider.append(point); 
        arrPoints.push(point);
 
        if (i == indexCurrent - 1) {
            point.style.opacity = 1;
        }
     }
 
       //sync point with sliderPrev/sliderNext buttons
     arrPoints.forEach(point => {
         point.addEventListener('click', (e) => {
             const slideTo = e.target.getAttribute('data-slide-to'); 
             indexCurrent = slideTo;
              
             slideOffset = deleteNotNumbers(width) * (slideTo - 1); 
 
             slideInner.style.transform = `translateX(-${slideOffset}px)`; 
 
         addOutputIndexCurrent ();
         changeOpacityToPoint();
         });
 
     });  
 
}

export default slider;