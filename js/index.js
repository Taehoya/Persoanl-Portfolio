$(document).ready(function(){
    let clickController =  true;
    function hamControl(){
        if(clickController){
            $('.body_container').css({
                height : "100vh",
                overflow : 'hidden'
            });

            $(".menu-list").animate({
                width : "100vw",
            });

        }else{
            $(".menu-list").animate({
                width: "0px"
            });

            $('.body_container').css({
                height : "auto",
                overflow : 'none'
            });

        }//else

        if(clickController){
            $(".footer").animate({
                display : "block"
            });

            $(".footer").css({
                display : "block"
            });




        }else{
            $(".footer").animate({
                display : "none"
            });

            $(".footer").css({
                display : "none"
            });


        }//else

        clickController = !clickController;
    }

    $("#click-btn").click(function(){
        $("#click-btn").toggleClass('active');
        hamControl();
    });



    $("#home-button").on('click', function(event) {
        let target = $('.home-section');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            // hamControl();
            $("#click-btn").removeClass('active');
            return false;
        }
    });

    $("#project-button").on('click', function(event) {
        let target = $('.project-section');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            // hamControl();
            $("#click-btn").removeClass('active');
            return false;
        }
    });

    $("#experience-button").on('click', function(event) {
        let target = $('.experience-section');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            // hamControl();
            $("#click-btn").removeClass('active');
            return false;
        }
    });

    $("#connect-button").on('click', function(event) {
        let target = $('.connect-section');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            // hamControl();
            $("#click-btn").removeClass('active');
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

