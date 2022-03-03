import {animate} from './helpers'

const modal = () => {
  const buttons = document.querySelectorAll('.popup-btn')
  const modal = document.querySelector('.popup')
  const modalContent = modal.querySelector('.popup-content')
  let documentWidth = document.documentElement.offsetWidth

  function makeEaseOut(timing) {
    return function(timeFraction) {
      return 1 - timing(1 - timeFraction);
    }
  }

  function circ(timeFraction) {
    return 1 - Math.sin(Math.acos(timeFraction));
  }

  let ciricEaseOut = makeEaseOut(circ);

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.style.display = "block"
      if(documentWidth > 768) {
        animate({
          duration: 1000,
          timing: ciricEaseOut,
          draw(progress) {
            modalContent.style.left = (progress * 38) + '%';
          }
        });
      } 
    })
  });

  modal.addEventListener('click', e => {
    if(!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      
      modal.style.display = "none"
    }
  })


}

export default modal