const burgerMenu = () => {
   const burger = document.querySelector('.burger')
   const menu = document.querySelector('.menu')
   const headerNav = document.querySelector('.header__menu')
   const headerUl = document.querySelector('.header__list')
   const close = document.querySelector('.menu__close')
   const body = document.querySelector('.body')

   function adaptivMenu(windowWidth, breakpoint) {
      if (windowWidth < breakpoint) {

         menu.append(headerUl)

      } else {

         headerNav.append(headerUl)

      }
   }

   adaptivMenu(window.innerWidth,1216)

   window.addEventListener('resize', () => {

      adaptivMenu(window.innerWidth,1216)

   })

   burger.addEventListener('click', () => {
      close.classList.add('active')
      burger.classList.add('active')
      menu.classList.add('active')
      body.classList.add('lock')
   })

   close.addEventListener('click', () => {
      close.classList.remove('active')
      menu.classList.remove('active')
      burger.classList.remove('active')
      body.classList.remove('lock')
   })

}

burgerMenu();
