function init() {
    $('nav li').hover(function(){
        $('.contesto.prova').removeClass('prova');
        $(this).find('.contesto').addClass('prova');
    }, function(){
    })
    $('body').click(function(event){
        $('.contesto.prova').removeClass('prova');
        event.stopPropagation('.contesto')
    })
}
$(document).ready(init)