const popupInfo = () => {
   const popup = document.querySelector('.popup')
   const close = document.querySelector('.popup__close')
   const planBtn = document.querySelector('.home__dog-btn')
   const body = document.querySelector('.body')

   planBtn.addEventListener('click', () => {
      popup.classList.add('active')
      close.classList.add('active')
      body.classList.add('lock')
   })

   popup.addEventListener('click',(e) => {

      if (e.target.classList.contains('popup__close')) {
         e.target.classList.remove('active')
         popup.classList.remove('active')
         body.classList.remove('lock')
      }

      else if (e.target.classList.contains('popup')) {
         e.target.classList.remove('active')
         body.classList.remove('lock')
      }

   })



}

popupInfo();
