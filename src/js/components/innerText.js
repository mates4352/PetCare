const homeText = () => {
   const text = document.querySelector('.home__text')

   if (window.innerWidth < 576) {
      text.innerHTML = 'Записывайтесь в ветклиники и консультируйтесь с ветеринарами онлайн'
   }else {
      text.innerHTML = ' Записывайтесь в ветклиники <span> и консультируйтесь с ветеринарным </span> врачом онлайн'
   }

   window.addEventListener('resize', () => {
      if (window.innerWidth < 576) {
         text.innerHTML = 'Записывайтесь в ветклиники и консультируйтесь с ветеринарами онлайн'
      } else {
         text.innerHTML = ' Записывайтесь в ветклиники <span> и консультируйтесь с ветеринарным </span> врачом онлайн'
      }
   })

}

homeText();
