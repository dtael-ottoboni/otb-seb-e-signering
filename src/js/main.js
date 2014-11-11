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
    if ($("html").hasClass("nis_cobrand")) {
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
        , "djse" //DIF
        , "ecdk"
        , "ecno"
        , "ecse"
        , "eeen" //Eurocard
        , "esno"
        , "fadk" //finnair
        , "fano" //finnair
        , "fase" //finnair
        , "gcdk"
        , "gcno"
        //, "ildk" //Missing image
        , "jese" //ingo
        , "jydk"
        , "lkno"
        , "nkse"
        //, "obno" //Missing image
        , "opse"
        , "quno"
        , "quse"
        , "sadk"
        , "sano"
        , "sase"
        , "sbno" //SAAB
        , "sbse" //SAAB
        , "sfse"
        , "sjse"
        , "ssse" //SEB
        , "stno"
        , "stse"
        , "vono" //Volvo
        , "wase"
    ];

    if (document.referrer !== "") {

        referrer = document.referrer;

        referrer = "http://127.0.0.1:3000/acno/index.html";
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
    getBrand();
    centerContent();
});

$(window).resize(function() {
    setScreenWitdhClass();
    centerContent();
});
