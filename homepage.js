$(document).ready(function(){
    $('#one').click(function(){
        $('#reg1').show();
        $('#reg2').hide();
        $('#reg3').hide();
    })
    $('#two').click(function(){
        $('#reg1').show();
        $('#reg2').hide();
        $('#reg1').hide();
    })
    $('#three').click(function(){
        $('#reg1').show();
        $('#reg2').hide();
        $('#reg3').hide()
    })

})