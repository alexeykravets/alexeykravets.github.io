const slider = tns({
    container: '.carousel__inner',
    controls: false ,
    nav: false,
    speed: 500
});

document.querySelector('.prev').addEventListener('click' , function () {
    slider.goTo('prev');
  }); 
  document.querySelector('.next').addEventListener('click' , function () {
    slider.goTo('next');
  }); 


$( document ).ready(function() {

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
    
    function toggleSlide(item) {
      $(item).each(function(i) {
        $(this).on('click', function(e){
          e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      })
    };
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //MODAL
    $('[data-modal=consultation]').on('click' , function(){
        $('.overlay , #modal-consultation').fadeIn();
    });

    $('[data-modal=order]').each(function(i){
      $(this).on('click' , function(){
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay , #order').fadeIn();
      });
    });
    
    $('.modal__close').on('click' , function(){
      $('.overlay , #consultation , #order , #thanks' ).fadeOut();
    });

    function validateForms(form){
      $(form).validate({
        rules: {
          name: {
            required: true,
            minlength: 2
          },
          phone: "required",
          email: 
          {
            required: true,
            email: true
          }
        },
        messages : {
          name: {
            required: "Пожалуйства, введите имя",
            minlength: jQuery.validator.format("Как минимум {0} символа!")
          },
          phone: "Пожалуйства, укажите ваш номер",
          email: {
            required: "Вы забыли указать почту",
            email: "Используйте формат user@example.ua"
          }
        }
        
      });
    }
    validateForms('#consultation form')
    validateForms('#modal-consultation form')
    validateForms('#order form')
    $('input[name=phone]').mask("+7 (999) 999-99-99");
});
