const swiper = new Swiper('.swiper-container', {
   // Optional parameters
   loop: true,

   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
   },

   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

   // Navigation arrows

   spaceBetween: 30,
   slidesPerView: 1,
   centeredSlides: true,
   grabCursor: true,

 });
