var setScreenWitdhClass = function setScreenWitdhClassFunction() {
    var windowwidth = $(window).width();
    $('body').removeClass('xxs xs s m l');
    if (windowwidth > 1025){
        $('body').addClass('l');
    } else if (windowwidth > 640){
        $('body').addClass('m');
    } else if (windowwidth > 480){
        $('body').addClass('s');
    } else if (windowwidth > 320){
        $('body').addClass('xs');
    } else {
        $('body').addClass('xxs');
    }
}; 

var logoimg = $("#logoimg");
var header = $(".gh"); 

var setCoBrandLogo = function setCoBrandLogoFunction(val) {
    if ($("html").hasClass("cb") || 
        $("html").hasClass("cbse") || 
        $("html").hasClass("cbdk") || 
        $("html").hasClass("cbno")) {
        
        logoimg.attr("src","img/logo_" + val + ".png");
        header.hide();
    }
};

var centerContent = function centerContentFunction(val) {
    var wrapper         = $(".wrapper")
    ,   wrapperHeight   = wrapper.height()
    ,   docHeight       = window.innerHeight
    ,   topMargin       = parseInt(((docHeight - wrapperHeight) / 2) -150 );

    if (topMargin < 40){
        topMargin = 40;
        if ($("body").hasClass("xs") || $("body").hasClass("s")) {
            topMargin = 10;
        }
    }

    topMargin += "px";
    wrapper.css({ 'margin-top': topMargin});

};

var getBrand = function getCoBrandFunction() {
  var   referrer = ""
    ,   cobrands = [
          "acno"
        , "chse"
        , "cono"
        , "cose"
        , "djse"
        , "ecdk"
        , "ecno"
        , "ecse"
        , "eeen"
        , "esno"
        , "fadk"
        , "fano"
        , "fase"
        , "gcdk"
        , "gcno"
        , "ildk"
        , "jese"
        , "jydk"
        , "lkno"
        , "nkse"
        , "obno"
        , "opse"
        , "quno"
        , "quse"
        , "sadk"
        , "sano"
        , "sase"
        , "sase"
        , "sbno"
        , "sbse"
        , "sfse"
        , "sjse"
        , "ssse"
        , "stno"
        , "stse"
        , "vono"
        , "wase"
    ];

    if (document.referrer !== "") {
        referrer = document.referrer;
        //referrer = "http://127.0.0.1:3000/chse/index.html";
        for (var i = 0, len = cobrands.length; i < len; ++i) {
            if (referrer.indexOf(cobrands[i]) !== -1) {
                setCoBrandLogo(cobrands[i]);
                logoimg.show();
                return false;
            }
            logoimg.hide();
        }
    }
};

$(function() {
    setScreenWitdhClass();
    //getBrand();
    centerContent();
});

$(window).resize(function() {
    setScreenWitdhClass();
    centerContent();
});
