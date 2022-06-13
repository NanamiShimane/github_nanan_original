$(function($){
    $(window).scroll(function(){
        var targetElement =$('.profile').offset().top;
        var scroll=$(window).scrollTop();
        var windowHeight=$(window).height();
        if(scroll > targetElement - windowHeight + 200){
            $('.profile').css('opacity','1');
            $('.profile').css('transform','translateY(0)');
        }

    });

});