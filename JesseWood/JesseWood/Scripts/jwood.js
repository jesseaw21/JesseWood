/*var didScroll = false;
var scrollHeadCreated = false;

$(window).scroll(function () {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 500);

function hasScrolled() {
    if ($(this).scrollTop() > 80 && scrollHeadCreated == false) {
        var scrollHead = document.createElement("header");
        scrollHead.id = "bunko";
        document.body.appendChild(scrollHead);
        scrollHeadCreated = true;
    } else if ($(this).scrollTop() < 90 && scrollHeadCreated == true) {
        $("#bunko").remove();
        scrollHeadCreated = false;
    }
}*/

$(document).ready(function () {
    $('#my-email').html(function () {
        var e = "jessewood";
        var n = "21";
        var a = "@";
        var g = "gmail";
        var d = ".com";
        var f = 'mailto:' + e + n + a + g + d;
        $(this).parent('a').attr('href', f);
        return e + n + a + g + d;
    });
});