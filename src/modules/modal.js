const modal = () => {
  const buttons = document.querySelectorAll('.popup-btn')
  const modal = document.querySelector('.popup')
  const closeBtn = modal.querySelector('.popup-close')
  const modalContent = modal.querySelector('.popup-content')
  let documentWidth = document.documentElement.offsetWidth
  let count = 0;
  let animId;

  function animModal () {
    if (modal.style.display == 'block') {
      count++
      modalContent.style.left = count + '%'
      animId = requestAnimationFrame(animModal);
      if(count === 38) {
        cancelAnimationFrame(animId)
      }
    }
  }
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.style.display = "block"
      if(documentWidth > 768) {
        animModal();
      } 
    })
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = "none"
    count = 0;
  })


}

export default modal