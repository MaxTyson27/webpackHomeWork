const menu = () => {
  const menu = document.querySelector('menu')
  const main = document.querySelector('main');
  const scrollIcon = document.querySelector('main>a')

  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  }
  const scrollBlocks = (item) => {
    const id = item.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  main.addEventListener('click', e => {
    if(e.target.closest('a')) {
      e.preventDefault();
      scrollBlocks(scrollIcon)
    } else if (e.target.closest('.menu')) {
      handleMenu()
    } 
  })


  menu.addEventListener('click', e => {
    if(e.target.classList.contains('close-btn')) {
      e.preventDefault();
      handleMenu()
    } else if (e.target.matches('li a')) {
      e.preventDefault();
      handleMenu()
      scrollBlocks(e.target);
    } 
  })



}

export default menu