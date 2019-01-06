$(document).ready(function () {
    //--- help
    var help = 0;
    $("#help").click(function () {
        if (help == 0) {
            $(".button").addClass("help");
            $(".beat > span").addClass("buttonHelp");
            $(".high > span").addClass("buttonHelp");
            help = 1;
            return;
        } else {
            $(".button").removeClass("help");
            $(".beat > span").removeClass("buttonHelp");
            $(".high > span").removeClass("buttonHelp");
            help = 0;
        }

    });

    //-------------------------------------------1
    //-------------------------------------------------------1.1
    $("#work_it_1").click(function () {
        au_work_it_1.addEventListener("ended", function () {
            //TODO this shit lol
            //$(".button").addClass("help");
            $("#work_it_1").css("box-shadow", "0px 0px 0px 0px #000");
        })
        au_work_it_1.play();
        //$(".button").removeClass("help");


    })
    $("#make_it_1").click(function () {
        au_make_it_1.addEventListener("ended", function () {
            $("#make_it_1").css("box-shadow", "0px 0px 0px 0px #000");
        })
        au_make_it_1.play();

    })
    $("#do_it_1").click(function () {
        au_do_it_1.addEventListener("ended", function () {
            $("#do_it_1").css("box-shadow", "0px 0px 0px 0px #000");
        })
        au_do_it_1.play();

    })
    $("#makes_us_1").click(function () {
        au_makes_us_1.addEventListener("ended", function () {
            $("#makes_us_1").css("box-shadow", "0px 0px 0px 0px #000");
        })
        au_makes_us_1.play();

    })

    //-------------------------------------------------------1.2
    $("#harder_1").click(function () {
        au_harder_1.addEventListener("ended", function () {
            $("#harder_1").css("box-shadow", "0px 0px 0px 0px #000");
        })
        au_harder_1.play();

    })
    $("#better_1").click(function () {
        au_better_1.addEventListener("ended", function () {
            $("#better_1").css("box-shadow", "0px 0px 0px 0px #000");
        })
        au_better_1.play();

    })
    $("#faster_1").click(function () {
        au_faster_1.addEventListener("ended", function () {
            $("#faster_1").css("box-shadow", "0px 0px 0px 0px #000");
        })
        au_faster_1.play();

    })
    $("#stronger_1").click(function () {
        au_stronger_1.addEventListener("ended", function () {
            $("#stronger_1").css("box-shadow", "0px 0px 0px 0px #000");
        })
        au_stronger_1.play();

    })
    //-------------------------------------------------------1.3
    $("#more_than_1").click(function () {
        au_more_than_1.addEventListener("ended", function () {
            $("#more_than_1").css("box-shadow", "0px 0px 0px 0px #000");
        })
        au_more_than_1.play();

    })
    $("#hour_1").click(function () {
        au_our_1.addEventListener("ended", function () {
            $("#hour_1").css("box-shadow", "0px 0px 0px 0px #000");
        })
        au_hour_1.play();

    })
    $("#our_1").click(function () {
        au_our_1.addEventListener("ended", function () {
            $("#our_1").css("box-shadow", "0px 0px 0px 0px #000");
        })
        au_our_1.play();

    })
    $("#never_1").click(function () {
        au_never_1.addEventListener("ended", function () {
            $("#never_1").css("box-shadow", "0px 0px 0px 0px #000");
        })
        au_never_1.play();

    })
    //-------------------------------------------------------1.4
    $("#ever_1").click(function () {
        au_ever_1.addEventListener("ended", function () {
            $("#ever_1").css("box-shadow", "0px 0px 0px 0px #000");
        })
        au_ever_1.play();

    })
    $("#after_1").click(function () {

        au_after_1.addEventListener("ended", function () {
            $("#after_1").css("box-shadow", "0px 0px 0px 0px #000");
        })
        au_after_1.play();

    })
    $("#work_is_1").click(function () {

        au_work_is_1.addEventListener("ended", function () {
            $("#work_is_1").css("box-shadow", "0px 0px 0px 0px #000");
        })
        au_work_is_1.play();

    })
    $("#over_1").click(function () {

        au_over_1.addEventListener("ended", function () {
            $("#over_1").css("box-shadow", "0px 0px 0px 0px #000");
        })
        au_over_1.play();

    })

    //--------------------------------------2
    //-------------------------------------------------------2.1


    //----------------------------------------cloneNode :( 
    //worworitworworitworkit workit effect
    $("#work_it_2").click(function () {
        //au_work_it_2.cloneNode(true).play();        
        au_work_it_2.addEventListener("ended", function () {
            $("#work_it_2").css("box-shadow", "0px 0px 0px 0px #000");
        })

        au_work_it_2.play();
    })


    $("#make_it_2").click(function () {

        au_make_it_2.addEventListener("ended", function () {
            $("#make_it_2").css("box-shadow", "0px 0px 0px 0px #000");
        })
        au_make_it_2.play();

    })
    $("#do_it_2").click(function () {

        au_do_it_2.addEventListener("ended", function () {
            $("#do_it_2").css("box-shadow", "0px 0px 0px 0px #000");
        })
        au_do_it_2.play();

    })
    $("#makes_us_2").click(function () {
        au_makes_us_2.addEventListener("ended", function () {
            $("#makes_us_2").css("box-shadow", "0px 0px 0px 0px #000");
        })
        au_makes_us_2.play();

    })

    //-------------------------------------------------------2.2
    $("#harder_2").click(function () {

        au_harder_2.addEventListener("ended", function () {
            $("#harder_2").css("box-shadow", "0px 0px 0px 0px #000");
        })
        au_harder_2.play();

    })
    $("#better_2").click(function () {
        au_better_2.addEventListener("ended", function () {
            $("#better_2").css("box-shadow", "0px 0px 0px 0px #000");
        })
        au_better_2.play();

    })
    $("#faster_2").click(function () {
        au_faster_2.addEventListener("ended", function () {
            $("#faster_2").css("box-shadow", "0px 0px 0px 0px #000");
        })
        au_faster_2.play();

    })
    $("#stronger_2").click(function () {
        au_stronger_2.addEventListener("ended", function () {
            $("#stronger_2").css("box-shadow", "0px 0px 0px 0px #000");
        })
        au_stronger_2.play();

    })
    //-------------------------------------------------------2.3
    $("#more_than_2").click(function () {
        au_more_than_2.addEventListener("ended", function () {
            $("#more_than_2").css("box-shadow", "0px 0px 0px 0px #000");
        })
        au_more_than_2.play();

    })
    $("#hour_2").click(function () {
        au_hour_2.addEventListener("ended", function () {
            $("#hour_2").css("box-shadow", "0px 0px 0px 0px #000");
        })
        au_hour_2.play();

    })
    $("#our_2").click(function () {
        au_our_2.addEventListener("ended", function () {
            $("#our_2").css("box-shadow", "0px 0px 0px 0px #000");
        })
        au_our_2.play();

    })
    $("#never_2").click(function () {
        au_never_2.addEventListener("ended", function () {
            $("#never_2").css("box-shadow", "0px 0px 0px 0px #000");
        })
        au_never_2.play();

    })
    //-------------------------------------------------------2.4
    $("#ever_2").click(function () {
        au_ever_2.addEventListener("ended", function () {
            $("#ever_2").css("box-shadow", "0px 0px 0px 0px #000");
        })
        au_ever_2.play();

    })
    $("#after_2").click(function () {
        au_after_2.addEventListener("ended", function () {
            $("#after_2").css("box-shadow", "0px 0px 0px 0px #000");
        })
        au_after_2.play();

    })
    $("#work_is_2").click(function () {
        au_work_is_2.addEventListener("ended", function () {
            $("#work_is_2").css("box-shadow", "0px 0px 0px 0px #000");
        })
        au_work_is_2.play();

    })
    $("#over_2").click(function () {
        au_over_2.addEventListener("ended", function () {
            $("#over_2").css("box-shadow", "0px 0px 0px 0px #000");
        })
        au_over_2.play();

    })

    //-------------------------------------beat
    var b = 0;
    $(".beat").click(function () {
        if (au_beat.paused == true) {
            au_beat.play();
            $(this).css("background-color", "#00C1E8");
            //$(".button").css("box-shadow", "0px 0px 30px 0px #4CE1FF");
            b = 1;

        } else {
            au_beat.pause();
            au_beat.currentTime = 0;
            $(this).css("background-color", "#66D3E8");
            //$(".button").css("box-shadow", "0px 0px 0px 0px #000");
            b = 0;
        }
    })


    //-------------------------------------high
    var h = 0;
    $(".high").click(function () {
        if (h == 0) {
            $(this).css("background-color", "#FFB600");
            $("#high").css("display", "block");
            $("#normal").css("display", "none");
            h = 1;

        } else {
            $(this).css("background-color", "#FFCC4C");
            $("#high").css("display", "none");
            $("#normal").css("display", "block");
            h = 0;
        }
    })

    $(".button").click(function () {

        if (b == 1) {
            $(this).css("box-shadow", "0px 0px 20px 0px #4CE1FF");
            $(".high, .beat").css("box-shadow", "0px 0px 0px 0px #000");
        }
        if (h == 1 && b == 1) {
            $(this).css("box-shadow", "0px 0px 40px 0px #FFCC4C");
            $(".high, .beat").css("box-shadow", "0px 0px 0px 0px #000");
        }
    })
});
var h = 0;
var b = 0;
//keypress
//sloppy... all this to functions and then call them all lol ugry code bastard...
$(document).keypress(function (event) {

    if (event.charCode == 32) {
        if (au_beat.paused == true) {
            au_beat.play();
            $(".beat").css("background-color", "#00C1E8");
            //$(".button").css("box-shadow", "0px 0px 30px 0px #4CE1FF");
            b = 1;

        } else {
            au_beat.pause();
            au_beat.currentTime = 0;
            $(".beat").css("background-color", "#66D3E8");
            //$(".button").css("box-shadow", "0px 0px 0px 0px #000");
            b = 0;
        }
    }



    if (event.charCode == 13) {
        if (h == 0) {
            $(".high").css("background-color", "#FFB600");
            $("#high").css("display", "block");
            $("#normal").css("display", "none");
            h = 1;

        } else {
            $(".high").css("background-color", "#FFCC4C");
            $("#high").css("display", "none");
            $("#normal").css("display", "block");
            h = 0;
        }
    }

    //alert('Handler for .keypress() called. - ' + event.charCode);
    if (event.charCode == 113) {
        if (h == 0) {
            $("#work_it_1").css("box-shadow", "0px 0px 20px 0px #4CE1FF");
            au_work_it_1.play();
            au_work_it_1.addEventListener("ended", function () {
                $("#work_it_1").css("box-shadow", "0px 0px 0px 0px #000");
            })
        }
        if (h == 1) {
            $("#work_it_2").css("box-shadow", "0px 0px 40px 0px #FFCC4C");
            au_work_it_2.play();
            au_work_it_2.addEventListener("ended", function () {
                $("#work_it_2").css("box-shadow", "0px 0px 0px 0px #000");
            })
        }
    }
    if (event.charCode == 119) {
        if (h == 0) {
            $("#make_it_1").css("box-shadow", "0px 0px 20px 0px #4CE1FF");
            au_make_it_1.play();
            au_make_it_1.addEventListener("ended", function () {
                $("#make_it_1").css("box-shadow", "0px 0px 0px 0px #000");
            })
        }
        if (h == 1) {
            $("#make_it_2").css("box-shadow", "0px 0px 40px 0px #FFCC4C");
            au_make_it_2.play();
            au_make_it_2.addEventListener("ended", function () {
                $("#make_it_2").css("box-shadow", "0px 0px 0px 0px #000");
            })
        }
    }
    if (event.charCode == 101) {
        if (h == 0) {
            $("#do_it_1").css("box-shadow", "0px 0px 20px 0px #4CE1FF");
            au_do_it_1.play();
            au_do_it_1.addEventListener("ended", function () {
                $("#do_it_1").css("box-shadow", "0px 0px 0px 0px #000");
            })
        }
        if (h == 1) {
            $("#do_it_2").css("box-shadow", "0px 0px 40px 0px #FFCC4C");
            au_do_it_2.play();
            au_do_it_2.addEventListener("ended", function () {
                $("#do_it_2").css("box-shadow", "0px 0px 0px 0px #000");
            })
        }
    }
    if (event.charCode == 114) {
        if (h == 0) {
            $("#makes_us_1").css("box-shadow", "0px 0px 20px 0px #4CE1FF");
            au_makes_us_1.play();
            au_makes_us_1.addEventListener("ended", function () {
                $("#makes_us_1").css("box-shadow", "0px 0px 0px 0px #000");
            })
        }
        if (h == 1) {
            $("#makes_us_2").css("box-shadow", "0px 0px 40px 0px #FFCC4C");
            au_makes_us_2.play();
            au_makes_us_2.addEventListener("ended", function () {
                $("#makes_us_2").css("box-shadow", "0px 0px 0px 0px #000");
            })
        }
    }
    if (event.charCode == 97) {
        if (h == 0) {
            $("#harder_1").css("box-shadow", "0px 0px 20px 0px #4CE1FF");
            au_harder_1.play();
            au_harder_1.addEventListener("ended", function () {
                $("#harder_1").css("box-shadow", "0px 0px 0px 0px #000");
            })
        }
        if (h == 1) {
            $("#harder_2").css("box-shadow", "0px 0px 40px 0px #FFCC4C");
            au_harder_2.play();
            au_harder_2.addEventListener("ended", function () {
                $("#harder_2").css("box-shadow", "0px 0px 0px 0px #000");
            })
        }
    }
    if (event.charCode == 115) {
        if (h == 0) {
            $("#better_1").css("box-shadow", "0px 0px 20px 0px #4CE1FF");
            au_better_1.play();
            au_better_1.addEventListener("ended", function () {
                $("#better_1").css("box-shadow", "0px 0px 0px 0px #000");
            })
        }
        if (h == 1) {
            $("#better_2").css("box-shadow", "0px 0px 40px 0px #FFCC4C");
            au_better_2.play();
            au_better_2.addEventListener("ended", function () {
                $("#better_2").css("box-shadow", "0px 0px 0px 0px #000");
            })
        }
    }
    if (event.charCode == 100) {
        if (h == 0) {
            $("#faster_1").css("box-shadow", "0px 0px 20px 0px #4CE1FF");
            au_faster_1.play();
            au_faster_1.addEventListener("ended", function () {
                $("#faster_1").css("box-shadow", "0px 0px 0px 0px #000");
            })
        }
        if (h == 1) {
            $("#faster_2").css("box-shadow", "0px 0px 40px 0px #FFCC4C");
            au_faster_2.play();
            au_faster_2.addEventListener("ended", function () {
                $("#faster_2").css("box-shadow", "0px 0px 0px 0px #000");
            })
        }
    }
    if (event.charCode == 102) {
        if (h == 0) {
            $("#stronger_1").css("box-shadow", "0px 0px 20px 0px #4CE1FF");
            au_stronger_1.play();
            au_stronger_1.addEventListener("ended", function () {
                $("#stronger_1").css("box-shadow", "0px 0px 0px 0px #000");
            })
        }
        if (h == 1) {
            $("#stronger_2").css("box-shadow", "0px 0px 40px 0px #FFCC4C");
            au_stronger_2.play();
            au_stronger_2.addEventListener("ended", function () {
                $("#stronger_2").css("box-shadow", "0px 0px 0px 0px #000");
            })
        }
    }
    if (event.charCode == 121) {
        if (h == 0) {
            $("#more_than_1").css("box-shadow", "0px 0px 20px 0px #4CE1FF");
            au_more_than_1.play();
            au_more_than_1.addEventListener("ended", function () {
                $("#more_than_1").css("box-shadow", "0px 0px 0px 0px #000");
            })
        }
        if (h == 1) {
            $("#more_than_2").css("box-shadow", "0px 0px 40px 0px #FFCC4C");
            au_more_than_2.play();
            au_more_than_2.addEventListener("ended", function () {
                $("#more_than_2").css("box-shadow", "0px 0px 0px 0px #000");
            })
        }

    }
    if (event.charCode == 117) {
        if (h == 0) {
            $("#hour_1").css("box-shadow", "0px 0px 20px 0px #4CE1FF");
            au_hour_1.play();
            au_hour_1.addEventListener("ended", function () {
                $("#hour_1").css("box-shadow", "0px 0px 0px 0px #000");
            })
        }
        if (h == 1) {
            $("#hour_2").css("box-shadow", "0px 0px 40px 0px #FFCC4C");
            au_hour_2.play();
            au_hour_2.addEventListener("ended", function () {
                $("#hour_2").css("box-shadow", "0px 0px 0px 0px #000");
            })
        }
    }
    if (event.charCode == 105) {
        if (h == 0) {
            $("#our_1").css("box-shadow", "0px 0px 20px 0px #4CE1FF");
            au_our_1.play();
            au_our_1.addEventListener("ended", function () {
                $("#our_1").css("box-shadow", "0px 0px 0px 0px #000");
            })
        }
        if (h == 1) {
            $("#our_2").css("box-shadow", "0px 0px 40px 0px #FFCC4C");
            au_our_2.play();
            au_our_2.addEventListener("ended", function () {
                $("#our_2").css("box-shadow", "0px 0px 0px 0px #000");
            })
        }
    }
    if (event.charCode == 111) {
        if (h == 0) {
            $("#never_1").css("box-shadow", "0px 0px 20px 0px #4CE1FF");
            au_never_1.play();
            au_never_1.addEventListener("ended", function () {
                $("#never_1").css("box-shadow", "0px 0px 0px 0px #000");
            })
        }
        if (h == 1) {
            $("#never_2").css("box-shadow", "0px 0px 40px 0px #FFCC4C");
            au_never_2.play();
            au_never_2.addEventListener("ended", function () {
                $("#never_2").css("box-shadow", "0px 0px 0px 0px #000");
            })
        }
    }

    if (event.charCode == 104) {
        if (h == 0) {
            $("#ever_1").css("box-shadow", "0px 0px 20px 0px #4CE1FF");
            au_ever_1.play();
            au_ever_1.addEventListener("ended", function () {
                $("#ever_1").css("box-shadow", "0px 0px 0px 0px #000");
            })
        }
        if (h == 1) {
            $("#ever_2").css("box-shadow", "0px 0px 40px 0px #FFCC4C");
            au_ever_2.play();
            au_ever_2.addEventListener("ended", function () {
                $("#ever_2").css("box-shadow", "0px 0px 0px 0px #000");
            })
        }
    }
    if (event.charCode == 106) {
        if (h == 0) {
            $("#after_1").css("box-shadow", "0px 0px 20px 0px #4CE1FF");
            au_after_1.play();
            au_after_1.addEventListener("ended", function () {
                $("#after_1").css("box-shadow", "0px 0px 0px 0px #000");
            })
        }
        if (h == 1) {
            $("#after_2").css("box-shadow", "0px 0px 40px 0px #FFCC4C");
            au_after_2.play();
            au_after_2.addEventListener("ended", function () {
                $("#after_2").css("box-shadow", "0px 0px 0px 0px #000");
            })
        }
    }

    if (event.charCode == 107) {
        if (h == 0) {
            $("#work_is_1").css("box-shadow", "0px 0px 20px 0px #4CE1FF");
            au_work_is_1.play();
            au_work_is_1.addEventListener("ended", function () {
                $("#work_is_1").css("box-shadow", "0px 0px 0px 0px #000");
            })
        }
        if (h == 1) {
            $("#work_is_2").css("box-shadow", "0px 0px 40px 0px #FFCC4C");
            au_work_is_2.play();
            au_work_is_2.addEventListener("ended", function () {
                $("#work_is_2").css("box-shadow", "0px 0px 0px 0px #000");
            })
        }
    }
    if (event.charCode == 108) {
        if (h == 0) {
            $("#over_1").css("box-shadow", "0px 0px 20px 0px #4CE1FF");
            au_over_1.play();
            au_over_1.addEventListener("ended", function () {
                $("#over_1").css("box-shadow", "0px 0px 0px 0px #000");
            })
        }
        if (h == 1) {
            $("#over_2").css("box-shadow", "0px 0px 40px 0px #FFCC4C");
            au_over_2.play();
            au_over_2.addEventListener("ended", function () {
                $("#over_2").css("box-shadow", "0px 0px 0px 0px #000");
            })
        }
    }
});