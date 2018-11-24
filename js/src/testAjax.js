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


});