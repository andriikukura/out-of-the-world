// $('.fade').slick({
//     dots: true,
//     infinite: true,
//     speed: 500,
//     fade: true,
//     cssEase: 'linear'
//   });

$(document).ready(function(){
    $('.slider-wrapper').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
        
        customPaging : function(slider, i) {
            var thumb = $(slider.$slides[i]).data();
            return '<a>'+(i+1)+'</a>';},
    });
    $(".slider-wrapper").on('afterChange', function(event, slick, currentSlide){
        $(".counter").text(currentSlide + 1 );
     });
  });

  $(document).ready(function(){

  });

  

