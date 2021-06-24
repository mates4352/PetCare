const cardHidden = () => {
   if (window.innerWidth < 992) {
   const adviceArrowBtn = document.querySelector('.advice__arrow-btn')
   const adviceCardHidden = document.querySelector('.advice__card-bg')
   const adviceCard = document.querySelector('.advice__card')

   adviceArrowBtn.addEventListener('click', () => {
      adviceCardHidden.classList.toggle('active')
   })

   adviceCard.addEventListener('click', () => {
      adviceCardHidden.classList.toggle('active')
   })
   }

}

cardHidden();
