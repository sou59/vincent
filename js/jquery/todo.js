

(function ($) {
    $.fn.todo = function () { 

        this.each(function() {
        $('.tasks').on('click', 'li', function (event) {
            event.preventDefault();
            var target = $( event.target );

            if ( target.parent().hasClass('todo-checkbox') ) {

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

        $('.todo').on('click', 'button', function (event) {
            event.preventDefault();

            var target = $( event.target );

            if(target.hasClass('removeTask')) {

                if($('todo-checkbox').find('fa-check-square')) {

                    $('.fa-check-square').each(function(){
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

    });

    Return this;

  };

})(jQuery);
