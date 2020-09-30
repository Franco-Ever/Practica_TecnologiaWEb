jQuery('document').ready(function($){
    var menuBtn=$('.menu-icon'),
    menu=$('.navegacion ul');

    menuBtn.click(function(){
        if(menu.hasClass('show'))
        {
            menu.removeClass('show');
        }else{
            menu.addClass('show');
        }

        
    })

})

var fecha_actual=new Date();
var dia=fecha_actual.getDate();
var mes=fecha_actual.getMonth()+1;
var anio=fecha_actual.getUTCFullYear();

var hora=fecha_actual.getHours();
var min=fecha_actual.getMinutes();
var seg=fecha_actual.getSeconds();

document.write('Hora y fecha de Bolivia: ' + dia +'/'+mes+'/'+anio+' '+hora+':'+min+':'+seg+' hrs.');