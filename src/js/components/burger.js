const burgerMenu = () => {
   const burger = document.querySelector('.burger')
   const menu = document.querySelector('.menu')
   const headerNav = document.querySelector('.header__menu')
   const headerUl = document.querySelector('.header__list')


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
      burger.classList.toggle('active')
      menu.classList.toggle('active')
   })

}

burgerMenu();
