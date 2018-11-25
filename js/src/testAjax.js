$( document ).ready(function() { // obligatoire pour jquery

    //sans $.ajax
    let myGetRequest = new Request('https://jsonplaceholder.typicode.com/posts');
    fetch(myGetRequest)
    .then(response => {
    response.json().then(data => console.log(data))
    });
    let myPostHeaders = new Headers();
    myPostHeaders.append('Content-Type', 'application/json');
    let options = {
    method: 'POST',
    headers: myPostHeaders,
    body: JSON.stringify({userId: 1, title: 'Formation Openska', body: 'Lorem ipsum dolor sit amet ...'}),
    };
    let myPostRequest = new Request('https://jsonplaceholder.typicode.com/posts');
    fetch(myPostRequest, options)
    .then(response => {
    response.json().then(data => console.log(data));
    });

    // avec $ajax c'est plus court

    $.ajax('https://jsonplaceholder.typicode.com/posts').done(data => console.log(data));
    let data = {userId: 1, title: 'Formation Openska', body: 'Lorem ipsum dolor sit amet ...'};

    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'POST',
        data: data,
    }).done(data => console.log(data));


    // évènement
    $('.btn-send').on('click', event => {

        $(event.target).prop('disabled', true);
        $('#animate').animate({
            height: 200,
            width: 400,
            opacity: 0.5
        }, 1000, "swing", () => $('.btn-send').trigger('sent'));
        });


        /*AJAX peut être utilisé pour récupérer les valeurs d'un formulaire et lancer la requête manuellement sans devoir recharger la page.
        On aura ici besoin de la fonction .serialize() qui, appliquée sur l'élément du <form>, retournera une string contenant les données rentrées.*/
        var form = $('form');
        
        form.on('submit', function(e){
            e.preventDefault(); // Empeche la page de se recharger
        
            var donnees = form.serialize(); // Récupère les données du formulaire
        
            $.ajax({ // Envoie les données récupérées à une page pour traitement
                type : 'POST',
                data : donnees
                url : 'page.php'
            });
        });

        $("form").submit(function(e){
            e.preventDefault();
    
            $(this).removeClass("error");
    
            var $input = $("input");
    
            if ($input.val().trim() === '') {
                $($input).addClass("error");
            }
            /*else {
                $("form").inserAFter("<p>Vous êtes bien enregistré</p>");
            }*/
    
        });
        

});