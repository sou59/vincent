// appel de la fonction créer avec jquery.js
// on crée notre propre jquery

$.ready(function () {
    console.log('DOM loaded');

    // pour l'affichage des arguments dans la console (décommenter ici et ds jquery.js)
   // $.find("Toto", "Jena", "Xena", "Chuck");

    
   // $.find("ul").findAll("li").addClass('toto');  //ajoute une class test à tous les éléments
 
    //console.log($.elements);
    // avec un tableau d'élements on peut leur faire tout ce qu'on veut

    $.findAll('li').on('click', function () {
       // $.addClass('toto');

       alert("C'est moi TOTO!!");
    });

});