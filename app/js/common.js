$(document).ready(function(){
    $("#btn_calendar").click(function(){
        $(".content-btn__add").slideToggle("slow");
        return false;
    });
});


$(document).ready(function(){
    $(".header-city__date").click(function(){
    	$("#header-search").hide();
        $("#header-date").slideToggle("slow");
        return false;
    });
});

$(document).ready(function(){
    $(".header-city__search").click(function(){
    	$("#header-date").hide();
        $("#header-search").slideToggle("slow");
        return false;
    });
});
