$('#to_about').click( function(){
    $('#about').css('display', 'block');
    $('#product').css('display', 'none');
    $('#top').css('display', 'none');
});

$('#to_product').click( function(){
    $('#product').css('display', 'block');
    $('#about').css('display', 'none');
    $('#top').css('display', 'none');
});

$('#to_top').click( function(){
    $('#top').css('display', 'block');
    $('#about').css('display', 'none');
    $('#product').css('display', 'none');
});