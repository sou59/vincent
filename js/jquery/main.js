$(document).ready(function () {

    $('li').css('color', 'red');
    
    // keyup à chaque lettre remplie le p
    var valinput = $('#userinput').keyup(function() {
        // récupération de la valeur tapé dans l'input
        var text = valinput.val();

        //insertion dans le p.insert
        $(".insert").text(text);
    });

/*
    $( "#submit" ).click(function() {
        var text = $("#userinput").val();

        $(".insert").text(text);
    });
*/
});