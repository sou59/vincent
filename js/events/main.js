// appel de la fonction créer avec jquery.js
// on crée notre propre jquery

$.ready(function () {
    console.log('DOM loaded');

    // pour l'affichage des arguments dans la console (décommenter ici et ds jquery.js)
   // $.find("Toto", "Jena", "Xena", "Chuck");

    
   // $.find("ul").findAll("li").addClass('toto');  //ajoute une class test à tous les éléments
 
    //console.log($.elements);
    // avec un tableau d'élements on peut leur faire tout ce qu'on veut

    $.find('li').on('click', function (event) {
        // modifier la couleur, récuperer event celui qui a été cliqué
        // target celui qui emet l'évènement li ou h1 (ou srcElement)

        const elem = $.apply(this);

        //récupére un seul élément et lui applique ce que l'on veut
        // écrase ce qui existe
        // $.apply(this).addClass('toto');

        $.find('li').addClass('toto');

        event.target.style.backgroundColor = '#FF00FF';

    }); 
    

});

function test(str) {
    str = 'toto';
}

name = 'wilfried';

// copie de la valeur wilfried donné à test
/*
en mémoire voir cours Momo 
name    0x001   wilfrid
str     0x002   toto
2 emplacements mémoire (uniquement pour les type promitifs)
*/
test(name);

console.log(name);

// si c'est un objet
function tata(obj) {
    obj.name = 'toto'; // adresse mémoire de la valeur
}

user = {name: 'Wilfrid'};

tata(user);

console.log(user.name);