$(document).ready(function () {

    $('li').css('color', 'red');
    
    $val = $('input').val();
    console.log($val);
    
    $('button').click(function(event) {
        event.preventDefault();

        $('p').text($val);

    });


});