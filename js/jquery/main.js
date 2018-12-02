$(document).ready(function () {
   // $('li').css('color', 'red');
    // keyup à chaque lettre remplie le p
    /* keyup : à éviter!!
    var valinput = $('#userinput').keyup(function() {
        // récupération de la valeur tapé dans l'input
        var text = valinput.val();
        //insertion dans le p.insert
        $(".insert").text(text);
    });
    */
/*
    $( "#submit" ).click(function() {
        var text = $("#userinput").val();
        $(".insert").text(text);
    });
*/
// existe un évenement input (keyup, keypress avec tant de l'attence)
// récupérer les texte, appuie sur entree ajoute dans li au fur et a mesure
/*
    $('#userinput').on('keyup', function (e) {
        console.log(e);
        if (e.which == 13) { // or keyCode 13 = touche entrée
            let textinput = $(this).val();
            // si c'est vrai il n'y a pas d'espace
            if ($(this).val().trim()) {
                var tmpl = 
                '<li>'+
                    '<a href="#" class="todo-checkbox"><i class="fa fa-check-square"></i></a>'+
                    '<span class="todo-text>' +$(this).val()+'</span>'+
                    '<a href="#"><i class="todo-trash fa fa-trash"></i></a>'+
                '</li>';
                $('.todo').append(tmpl);   
            }
            // on vide le input
            $(this).val('');
        } 
        
        // on ajoute la valeur dans le p
        $(".insert").text($(this).val());
    });
*/

            // précision li sinon cela ne marche qu'une fois, ainsi foncttion sur la checkbox ou poubelle correspond bien au 
            $('.tasks').on('click', 'li', function (event) {
                event.preventDefault();
                //console.log(event);

                var target = $( event.target );
            // console.log(event.target);

                if ( target.parent().hasClass('todo-checkbox') ) {
                //target.toggleClass('fa-check-square fa-square');

                    if ( target.hasClass( "fa-square" ) ) {
                        target.removeClass("fa-square").addClass('fa-check-square');

                        /* COMPTEUR */ 
                        var lencheck = function() {
                            var n = $('.fa-check-square').length;
                            var len = $('.fa-square').length;;
                            $("span.count").text( "There are " + (n) + "/"+ (len+n) + " éléments"); 
                        }
                        lencheck();

                        $( "todo-checkbox" ).on( "click", lencheck );


                    } else if(target.hasClass( "fa-check-square")) {
                        target.removeClass("fa-check-square").addClass('fa-square');

                        /* COMPTEUR */ 
                        var lencheck = function() {
                            var n = $('.fa-check-square').length;
                            var len = $('.fa-square').length;;
                            $("span.count").text( "There are " + (n) + "/"+ (len+n) + " éléments"); 
                        }
                        lencheck();

                        $( "todo-checkbox" ).on( "click", lencheck );

                    }
                    $(this).find('.todo-text').toggleClass('todo-text-valid');
                }
        
                // prendre l'event
                if (target.hasClass('todo-trash')) {
                    // event.currentTarget.remove();
                    $(this).slideUp(3000, function() {
                        this.remove();
                // ul.removeChild(target);
                    });
                }
            });

            $('.textTask').on('keyup', function (event) {
                if (event.keyCode === 13) {
                    if ($(this).val().trim()) {
                        var tmpl =
                        $('<li>' +
                                '<a href="#" class="todo-checkbox"><i class="fa fa-square"></i></a>' +
                                '<span class="todo-text" contenteditable="true">' + $(this).val() + '</span>' +
                                '<a href="#"><i class="todo-trash fa fa-trash"></i></a>' +
                            '</li>').hide();
                        $('.tasks').append(tmpl);
                        tmpl.fadeIn(1000);
                    }

                    // on vide le input
                    $(this).val('');

                    /* Ajouter une méthode permettant d'ajouter du style css */
                    $('ul.tasks').find('.todo-text')
                        .css('color', 'red')
                        .css('backgroundColor', 'yellow');
                }
            });

            // dans la div.todo où se trouve la liste ul
            // quand je click sur le button je supprime tous les éléments dont la class est check
            $('.todo').on('click', 'button', function (event) {
            // alert("Bouton cliqué");
                event.preventDefault();
            // console.log(event);

                var target = $( event.target );
            // console.log(event.target)
                if(target.hasClass('removeTask')) {
            //     console.log(event.target)
                    if($('todo-checkbox').find('fa-check-square')) {
                    //  console.log(event.target)
                        $('.fa-check-square').each(function(){
                    //       console.log(event.target)
                        // le parent est bien le li
                    // event.currentTarget.remove();
                        $(".fa-check-square").parent().parent().remove();
                        });
                    }
                }
            });

            /* Ajouter une méthode permettant de selectionner un élément frère. */
            $('.article-1, .article-2, .article-3').find('h2').next().addClass("test");

            /* Ajouter une méthode permettant d'afficher ou cacher un élément*/

            function handler( event ) {
                var target = $( event.target );
                if ( target.is( "h2.titre" ) ) {
                target.next().toggle();
                }
            }
            $( "h2.titre" ).click( handler ).find( "p.contenu" ).hide();

    /*
    Le compteur doit être représenté sous la forme : 3/12 --> fait
    Ajouter une transition d'insertion --> fait

    Ajouter une transition lors de l'ajout d'une tâche dans la todo liste. --> fait

    Création d'un plugin
    */
});