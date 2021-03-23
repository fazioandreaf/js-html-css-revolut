function init() {
    $('nav li').hover(function(){
        $('.contesto.prova').removeClass('prova');
        $(this).find('.contesto').addClass('prova');
    }, function(){
    })
    $('body').click(function(event){
        $('.contesto.prova').removeClass('prova');
    })
    $('.contesto').click(function(event){

        event.stopPropagation()
    })
}
$(document).ready(init)