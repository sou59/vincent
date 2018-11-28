(function () {

// scope de la fonction locale, fonction isole, car si autre bibliothèque dans le même js pas de conflit
// création d'un objet jquery
    const myJquery = {
        // tableau d'élément, d'objet que je vais récupérer (ex. h1, div...)
        elements: [],
        // paramètre fonction callback : fnc de rappel
        ready: function (callback) {

            //si le dom est chargé
            document.addEventListener('DOMContentLoaded', callback, false);
             
        },

        /*
        find: function () {
            // récupère les paramètres de la fonction
            // quand on ne connait pas les arguments à l'avance
            console.log(arguments);
        }
        */

        find: function (selectors) {
            this.elements.push(document.querySelector(selectors));
            return this;
        },

        findAll: function (selectors) {
            const elems = document.querySelectorAll(selectors);

            for (let elem of elems) {
                this.elements.push(elem);
            }
            return this;
        },

        addClass: function (names) {
            // voir le foction programming (tout est fonction)
            this.elements.forEach(function (elem) {
                // ajoute une class même si il en existe une (attention normalement d'autre )
                // s'il y a une class existante ajouter un espace avant, sinon pas d'espace

                // en ternaire
                elem.className = elem.className ? ' ' + names : names;

                /*
                if normal : 

                if(elem.className.length > 0) {
                    elem.className +=  " " + names;
                } else {
                    elem.className +=  names;
                }
                */
                
            });
            // avec return this permet de chainer à la suite
            return this;
        },

        // ajouter un évènements sur l'élément
        on: function (event, callback) {

            for (let elem of this.elements) {
                elem.addEventListener(event, callback);
            }
            return this;
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
