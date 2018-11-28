(function () {

// scope de la fonction locale, fonction isole, car si autre bibliothèque dans le même js pas de conflit
// création d'un objet jquery
    const myJquery = {
        // paramètre fonction callback : fnc de rappel
        ready: function (callback) {
            document.addEventListener('DOMContentLoaded', callback, false);
            //si le dom est chargé 
        }
    }
// objet window qui est global
// tout est private ici, sauf quand on le met en globale par l'intermédiaire de window
// écrire windows en minuscule

    if (!window.$) {
        // rendre globale myJquery
        window.$ = myJquery;
    }

} ());
