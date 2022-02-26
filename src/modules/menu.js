const menu = () => {
  const menuBtn = document.querySelector('.menu')
  const menu = document.querySelector('menu')
  const closeBtn = menu.querySelector('.close-btn')
  const menuItems = menu.querySelectorAll('ul>li>a')
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

  menuBtn.addEventListener('click', handleMenu)
  closeBtn.addEventListener('click', handleMenu)
  scrollIcon.addEventListener('click', (e)=> {
    e.preventDefault();
    scrollBlocks(scrollIcon)
  })

  menuItems.forEach(item => item.addEventListener('click', (e) => {
    e.preventDefault();
    handleMenu()
    scrollBlocks(e.target);
  }));

}

export default menu