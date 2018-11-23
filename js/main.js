
//Ajouter cette fonction au prototype du String

String.prototype.mdp = function(len) {

    let pg = new Generateur(len, this.toString());

    return pg.generate();

}
// on peux le faire avec des caractères données et y appliquer la fonction appliquée par ailleurs
let chars = 'aabaksldjmeomljsmljq';

console.log(chars.mdp(20));


//utilisation du Number ajout d'une fonction dans la prototype
Number.prototype.getRandomInt = function () {
    return Math.floor(Math.random() * Math.floor(this));
};

let max = 100;
console.log(max.getRandomInt());