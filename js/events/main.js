// appel de la fonction créer avec jquery.js
// on crée notre propre jquery

$.ready(function () {
    console.log('DOM loaded');

    // pour l'affichage des arguments dans la console (décommenter ici et ds jquery.js)
   // $.find("Toto", "Jena", "Xena", "Chuck");

    
   // $.find("ul").findAll("li").addClass('toto');  //ajoute une class test à tous les éléments
 
    //console.log($.elements);
    // avec un tableau d'élements on peut leur faire tout ce qu'on veut


    $.find('li, #menu').addClass('test');

    
    $.find('li').on('click', function (event) {
        // modifier la couleur, récuperer event celui qui a été cliqué
        // target celui qui emet l'évènement li ou h1 (ou srcElement)
        console.log(event);

        const elem = $.apply(this);

        //récupére un seul élément et lui applique ce que l'on veut
        // écrase ce qui existe
        $.apply(this).addClass('toto');

        event.target.style.backgroundColor = '#FF00FF';
        console.log(elem.hasClass('test'));
        if (elem.hasClass('test')) {
            this.add('toto');
       };
        


        // alert("C'est moi TOTO!!");

    });
    
    

});