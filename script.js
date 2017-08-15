$(document).ready(function() {
    $('.languages').hide();
    $('.centers').hide();
    $('.projects').hide();
    $('.interest').hide();
    $('.calculator').hide();
    $('#codeSkills').mouseenter(function() {
        $('.languages').fadeIn(900);
    });
    $('#codeSkills').mouseleave(function() {
        $('.languages').fadeOut();
    });
    $('#lrnSites').mouseenter(function() {
        $('.centers').fadeIn(900);
    });
    $('#lrnSites').mouseleave(function() {
        $('.centers').fadeOut();
    });
    $('#summerP').mouseenter(function() {
        $('.projects').fadeIn(900);
    });
    $('#summerP').mouseleave(function() {
        $('.projects').fadeOut();
    });
    $('#interests').mouseenter(function() {
        $('.interest').fadeIn(900);
    });
    $('#interests').mouseleave(function() {
        $('.interest').fadeOut();
    });
    $('#calculators').mouseenter(function() {
        $('.calculator').fadeIn(900);
    });
    $('#calculators').mouseleave(function() {
        $('.calculator').fadeOut();
    });
});
