// Exercice

/*
génératuer de mot de passe
class qui genere des caratères aléatoire
mot de passe chaine de caractère aléatoire de tant de caractères
mdp chaine de 10 caractères
ex : 1aYd78E2a6

*/


/* 
variable x = nombre de caractères
caractère peuvent être numérique ou alpha majuscule ou minuscule

faire un MathRandom avec nombres et caractères alpha majuscule ou minuscule

*/

class MotDePasse {

    mdp(x) {

    }

    

}

function getRandom(taille) {
    return Math.floor(Math.random()*taille);
}

console.log(getRandom(0,9));
var toto = "";
// tableau caratère en string

var tab1 = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','A','B','C','D','E','F'];

var nbr = 10;

for (var i = 0; i < nbr; i++) {
    toto = toto + tab1[getRandom(tab1.length)];
}

console.log(toto);



