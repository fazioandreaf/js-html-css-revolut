function init() {
    $('nav li').hover(function(){
        $(this).find('.contesto').css('display','block')
    }, function(){
        $(this).find('.contesto').css('display','none')})
}
$(document).ready(init)