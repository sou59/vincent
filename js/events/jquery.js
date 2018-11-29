(function () {

// scope de la fonction locale, fonction isolée, car si autre bibliothèque dans le même js pas de conflit
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
    // inutile puisque find ci-dessous suffit
     /*   find: function (selectors) {
            this.elements.push(document.querySelector(selectors));
            return this;
        },*/

        find: function (selectors) {
        // récupère le tableau de noeud vide
           this.elements = document.querySelectorAll(selectors);
// du coup ci dessous inutile
          /*  for (let elem of elems) {
                this.elements.push(elem);
            }*/
            return this;
        },

        hasClass: function (name) {
            return this.elements[0].className.split(' ').indexOf(name) === -1;
            
        },

        addClass: function (names) {
            // variable temporaire pour conserver l'état du tableau
            var tmp = this.elements;
            var that = this;

            tmp.forEach(function (elem) {
                if (!that.apply(elem).hasClass(name)) {
                    elem.className += elem.className ? ' ' + names : names;
                }
            });

            this.elements = tmp;

            return this;

            /*
            // voir le foction programming (tout est fonction)
            this.elements.forEach(function (elem) {
            // ajoute une class même si il en existe une (attention normalement d'autre )
            // s'il y a une class existante ajouter un espace avant, sinon pas d'espace

            // ne pas ecraser les classes existantes
                if(!elem.className.includes(names)) {
                    elem.className += elem.className ? ' ' + names : names;
                }
            // en ternaire
            //   elem.className += elem.className ? ' ' + names : names;

                if normal : 

                if(elem.className.length > 0) {
                    elem.className +=  " " + names;
                } else {
                    elem.className +=  names;
                }
      
            });
             // avec return this permet de chainer à la suite
                return this;
            */
           
        },

        // ajouter un évènements sur l'élément
        on: function (event, callback, useCapture) {
            useCapture = useCapture || false;

            // ne pas oublier de cibler this.elements sinon il ne sait à quoi faire référence (undefine); tester avec console.log(this.elements) / console.log(elements) pour vérifier
          /* utilisation de for
            for (let elem of this.elements) {
                elem.addEventListener(event, callback, useCapture);
            }

            utilisation du forEach    */
            this.elements.forEach(function (elem) {
                elem.addEventListener(event, callback, useCapture);

            });
            
            return this;
        },

        // un élément qui est dans la nouvelle sélection d'élément, on cible un seul élément
        apply: function (elem) {
            this.elements = [elem];
            return this;
        },


    }


    /* objet window qui est global
    tout est private ici, sauf quand on le met en globale par l'intermédiaire de window
    écrire windows en minuscule
    */

    if (!window.$) {
        // rendre global myJquery
        window.$ = myJquery;
    }

} ());
