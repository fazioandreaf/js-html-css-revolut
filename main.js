function clickRemove(){

    $('body').click(function(){
        $('.contesto.prova').removeClass('prova');
    })
    $('.contesto').click(function(event){
    
        event.stopPropagation()
    })

}
function fhover() {

    $('nav li').hover(function(){
        $('.contesto.prova').removeClass('prova');
        $(this).find('.contesto').addClass('prova');
    },)
}
function init() {
    fhover();
    clickRemove()
    $('nav li').click(function(){
        var prova=$(this).find('.contesto').attr('class')
        
        if(prova.includes('prova')){
            console.log('ciao')
        }else {
            console.log('ocaca')
            $(this).find('.contesto').addClass('prova');
            event.stopPropagation()
        }
    })
}
$(document).ready(init)