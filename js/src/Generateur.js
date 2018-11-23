// Exercice

/*
génératuer de mot de passe
class qui genere des caratères aléatoire
mot de passe chaine de caractère aléatoire de tant de caractères
mdp chaine de 10 caractères
ex : 1aYd78E2a6

*/
// une class par fichier

// plusieurs méthodes que l'on peur réultiliser plutôt qu'une seule avec tout dedans

class Generateur {

    // constructeur avec longeur du mdp = taille à initialiser ici à 10, ou longeur défini par l'utilisateur toto
    constructor(taille = 10, chars = "") {
        this.taille = taille;
        this.chars = chars;
        this.lower = 'abcdefghijklmnopqrstuvwxyz';
        this.upper = this.lower.toUpperCase;
        this.numeric = '0123456789';
        this.special = '@&!$%';

        // si la cahine de caractère est vide on join tous les éléments
        if (this.chars.length === 0) {
            this.resetChars(); // utilisation de la fonction en dessous du constructeur
        }
    }

    // colle toutes les chaines ainsi on pourra travailler sur l'ensemble de chaîne
    resetChars() {
        this.chars = [
            this.lower,
            this.upper,
            this.numeric,
            this.special
        ].join('');
    }

    // génération d'un nombre aléatoire
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    // création du mdp aléatoire
    generate() {
        // initialiser une variable vide
        let str = '';

        // lecture du tableau de caractères
        for (var i = 0; i < this.taille; i++) {
            let index = this.getRandomInt(this.chars.length -1);
            str += this.chars[index];
        }
        return str;
    }
    
}


/*
exos Souad
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
*/


