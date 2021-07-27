$(document).ready(function(){
    let clickController =  true;
    function hamControl(){
        if(clickController){
            $(".menu-list").animate({
                width : "100vw",
            });

        }else{
            $(".menu-list").animate({
                width: "0px"
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



});

