$(document).ready(function () {

    //-------------------------------------------1
    //-------------------------------------------------------1.1
    $("#work_it_1").click(function () {

        au_work_it_1.cloneNode(true).play();

    })
    $("#make_it_1").click(function () {

        au_make_it_1.cloneNode(true).play();

    })
    $("#do_it_1").click(function () {

        au_do_it_1.cloneNode(true).play();

    })
    $("#makes_us_1").click(function () {

        au_makes_us_1.cloneNode(true).play();

    })

    //-------------------------------------------------------1.2
    $("#harder_1").click(function () {

        au_harder_1.cloneNode(true).play();

    })
    $("#better_1").click(function () {

        au_better_1.cloneNode(true).play();

    })
    $("#faster_1").click(function () {

        au_faster_1.cloneNode(true).play();

    })
    $("#stronger_1").click(function () {

        au_stronger_1.cloneNode(true).play();

    })
    //-------------------------------------------------------1.3
    $("#more_than_1").click(function () {

        au_more_than_1.cloneNode(true).play();

    })
    $("#hour_1").click(function () {

        au_hour_1.cloneNode(true).play();

    })
    $("#our_1").click(function () {

        au_our_1.cloneNode(true).play();

    })
    $("#never_1").click(function () {

        au_never_1.cloneNode(true).play();

    })
    //-------------------------------------------------------1.4
    $("#ever_1").click(function () {

        au_ever_1.cloneNode(true).play();

    })
    $("#after_1").click(function () {

        au_after_1.cloneNode(true).play();

    })
    $("#work_is_1").click(function () {

        au_work_is_1.cloneNode(true).play();

    })
    $("#over_1").click(function () {

        au_over_1.cloneNode(true).play();

    })

    //--------------------------------------2
    //-------------------------------------------------------2.1
    
    
    //----------------------------------------cloneNode :( <-------- allé voy
    $("#work_it_2").click(function () {
        
         au_work_it_2.addEventListener("ended", function () {
            $("#work_it_2").css("box-shadow", "0px 0px 0px 0px #000");
        })
         
        au_work_it_2.play();
    })
    
        
    $("#make_it_2").click(function () {

        au_make_it_2.cloneNode(true).play();

    })
    $("#do_it_2").click(function () {

        au_do_it_2.cloneNode(true).play();

    })
    $("#makes_us_2").click(function () {

        au_makes_us_2.cloneNode(true).play();

    })

    //-------------------------------------------------------2.2
    $("#harder_2").click(function () {

        au_harder_2.cloneNode(true).play();

    })
    $("#better_2").click(function () {

        au_better_2.cloneNode(true).play();

    })
    $("#faster_2").click(function () {

        au_faster_2.cloneNode(true).play();

    })
    $("#stronger_2").click(function () {

        au_stronger_2.cloneNode(true).play();

    })
    //-------------------------------------------------------2.3
    $("#more_than_2").click(function () {

        au_more_than_2.cloneNode(true).play();

    })
    $("#hour_2").click(function () {

        au_hour_2.cloneNode(true).play();

    })
    $("#our_2").click(function () {

        au_our_2.cloneNode(true).play();

    })
    $("#never_2").click(function () {

        au_never_2.cloneNode(true).play();

    })
    //-------------------------------------------------------2.4
    $("#ever_2").click(function () {

        au_ever_2.cloneNode(true).play();

    })
    $("#after_2").click(function () {

        au_after_2.cloneNode(true).play();

    })
    $("#work_is_2").click(function () {

        au_work_is_2.cloneNode(true).play();

    })
    $("#over_2").click(function () {

        au_over_2.cloneNode(true).play();

    })

    //-------------------------------------beat
    $(".beat").click(function () {
        if (au_beat.paused == false) {
            au_beat.pause();
            au_beat.currentTime = 0;
            $(this).css("background-color", "#66D3E8");
            $(".button").css("box-shadow", "0px 0px 0px 0px #000");
        } else {
            au_beat.play();
            $(this).css("background-color", "#17C5E8");
            $(".button").css("box-shadow", "0px 0px 30px 0px #4CE1FF");
            $(".button.high, .button.beat").css("box-shadow", "0px 0px 0px 0px #000");
        }
    })


    //-------------------------------------high
    var f = 0;
    $(".high").click(function () {
        if (f == 0) {
            $(this).css("background-color", "#FFBE1A");
            $("#high").css("display", "block");
            $("#normal").css("display", "none");
            f = 1;
        } else {
            $(this).css("background-color", "#FFCC4C");
            $("#high").css("display", "none");
            $("#normal").css("display", "block");
            f = 0;
        }
    })

    $(".button").click(function () {
        if (f == 1) {
            $(this).css("box-shadow", "0px 0px 30px 0px #FFCC4C");
            $(".high, .beat").css("box-shadow", "0px 0px 0px 0px #000");
        }
    })
});
