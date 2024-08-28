new Swiper('.card-wrapper', {
    loop: true,
    SpaceBetween: 30
  
    // Pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
           slidesPerview: 1
        },

        768: {
            slidesPerview: 2
         },

         1024: {
            slidesPerview: 3

         }                     
    }
});