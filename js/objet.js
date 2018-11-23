'use strict';

// use strict : met des erreurs

// OBJET nom majustule


function User(name) {

    this.name = name;


    // fonction dans une variable ne pas oublier la virgule
    this.hello = function () {

        /*function debug() {
            // vaut objet windows car nous somme dans un fonction lambda
            console.log('debug : ' + this);
        };

        debug(); // affiche objet windows
        console.log('this.hello : ' + this);
        return 'Hello ' + this.name;
        */

        var self = this; // self ou that pour que this soit récupérer dans la fonction ci-dessous et donc avec la même contexte
       function debug() {
        // vaut objet windows car nous somme dans un fonction lambda
            self.hello;
        }

        debug(); 

        // callback
        this.display = function (callback) {
            // remet dans le contexte du this
            callback.apply(this);
        };
    };
}

// lien entre deaux objet : passer par le prototype qui existe sur tout les objets
function Admin(name) {
    this.name = name; // ne pas oublier = name
}

//  en JS tout est objet donc on peut ajouter ce qu'on veut à ce qui existe donc compatible es5 es6
/* ex Array.prototype.foreach = function {

};
*/

Admin.prototype = new User(); // une manière d'utiliser le prototype

// autre manière d'utiliser le prototype en ajoutant ce qu'on veut
Admin.prototype.work = function () { // passer par le prototype pour ajouter des fonctionnalités
    return this.name + ' travail.';
};

var a = new Admin('Toto');
console.log(a);

console.log(a.hello()); // appel de la fonction pour afficher le name

console.log(a.work()); // ne pas oublier les paranthèses => c'est une fonction!


var u = new User('Wilfried');



// console.log(u.hello());

/*
u.display(function() {
    console.log(this.name);
});
*/

// objet entreprise avec users, fnc qui add des users et admin doit y être aussi
// polymorphisme
function Company() {
    this.users = [];

    this.addUser = function(user) {
        // vérification du type si user n'est pas d'instance User je lève une exception = error
        // pas de else car si error le code en dessous ne s'applique pas
        if (!user instanceof User) {
            throw new Error("N'importe quoi ton typeof, je veux un User");
        }


        // ajout dans le tableau des users
        this.users.push(user);
    }
}

var c = new Company();

c.addUser(u);

c.addUser(a);

console.log(c.users);

// es6 concept de class

class Meetup {
    constructor(title) {
        this.title = title;
        this.maxCapacity = 50;

    }

    show() {
        console.log(`Meetup ${this.title}, Capacité max: ${this.maxCapacity}`);
    }

}

let m = new Meetup('Workshop Go');

m.show();


