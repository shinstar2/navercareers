$(function(){



  /**gnb nav (화살표) */
  $('.side-nav .nav-item').click(function(e){
    e.preventDefault();
    
    $(this).toggleClass('active')
    $(this).siblings().slideDown()
  })


  $('.gnb .gnb-item').hover(function(){

    if($(this).find('.sub-list').length > 0){
      $('.header').addClass('on');
      $(this).find('.sub-list').addClass('on')
    }
    
  },function(){
    $('.header, .sub-list').removeClass('on');
  })

  $('.lang-box .curr').click(function(){
    $('.lang-box').toggleClass('on')
  })


  $('.select').change(function(){
    $(this).css('color','#000')
  })

   

  const visualSlide = new Swiper(".visual-slide .swiper", {
    });


    const swiper = new Swiper(".people-slide", {
        slidesPerView:1,
        spaceBetween:30,
        navigation:{
          nextEl:'.next',
          prevEl:'.prev'
        },
        breakpoints:{
          768:{
            slidesPerView:1,
          },
          1025:{
            slidesPerView:1.2,
          }
        }
      });


    const benefitSlide = new Swiper(".benefit-slide", {
        slidesPerView:1,
        spaceBetween:30,
        navigation:{
          nextEl:'.next',
          prevEl:'.prev'
        },
        breakpoints:{
          768:{
            slidesPerView:2,
          },
          1025:{
            slidesPerView:3,
          }
        }
    });


    $('.relate').click(function(e){
      e.preventDefault();
      $('.footer .group-related').toggleClass('on')
    })


    $('.header .btn-menu').click(function(){
      $(this).toggleClass('on');
      $('.side-nav').toggleClass('on')
    })




})//지우지말기


