$(document).ready(function(){
    $("#click-btn").on('click',function(event){
        event.preventDefault();
        $(this).toggleClass('active');
        $(".overlay").toggleClass('visible');
    });

    $("#home-button").on('click', function(event) {
        let target = $('.home-section');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            if(window.innerWidth <= 767 ){
                $("#click-btn").toggleClass('active');
                $(".overlay").toggleClass('visible');
            }
            return false;
        }
    });

    $("#project-button").on('click', function(event) {
        let target = $('.project-section');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            if(window.innerWidth <= 767 ){
                $("#click-btn").toggleClass('active');
                $(".overlay").toggleClass('visible');
            }
            return false;
        }
    });

    $("#experience-button").on('click', function(event) {
        let target = $('.experience-section');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            if(window.innerWidth <= 767 ){
                $("#click-btn").toggleClass('active');
                $(".overlay").toggleClass('visible');
            }
            return false;
        }
    });

    $("#connect-button").on('click', function(event) {
        let target = $('.connect-section');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            if(window.innerWidth <= 767 ){
                $("#click-btn").toggleClass('active');
                $(".overlay").toggleClass('visible');
            }
            return false;
        }
    });

    let $header = $('.header');
    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
           $header.addClass('sticky');
        }else{
            $header.removeClass('sticky');
        }
    });
});

