// on peut de la 2d et de la 3d

const canvas = document.querySelector('#canvas');

// spécifier le contexte = ctx

const ctx = canvas.getContext('2d');

// définit couleur de remplissage du crayon
ctx.fillStyle = 'royalblue';

// largeur ligne par défaut strokeStyle
ctx.lineWidth = 5;


const h = canvas.clientHeight;
const w = canvas.clientWidth;

// set interval executer une fonction tous les tant de temps
// toutes les sec tu effaces et tu redessine du coup impression d'animation
 /*animation carre
var x = 0;
setInterval(function () {
        // nettoie la trainé supprime et déplace
        ctx.clearRect(0,0, w, h);
        x += 5;
        ctx.beginPath();

        // création du carré
        ctx.rect(x, 300, 200, 200);

        // remplir de couleur, par défaut c'est noir
        ctx.fill();

        ctx.beginPath();
        // false : dans le sens des aiguilles du montre
        // point d'origine
        ctx.arc(250, 200, 80, 0, Math.PI * 1, false);
        ctx.closePath();

        // fill corde d'un cercle, stroke représente bien le trait cercle
        ctx.stroke();
        ctx.fill();


        ctx.beginPath();
        // false : dans le sens des aiguilles du montre
        // point d'origine
        ctx.arc(250, 200, 80, 0, Math.PI * 1, false);
        ctx.closePath();

        // fill corde d'un cercle, stroke représente bien le trait cercle
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();

        ctx.moveTo(440, h/2-40); // déplacement de la main
        ctx.lineTo(400, h/2+40); // pose le crayon dessine de x à y
        ctx.lineTo(480, h/2+40);
        ctx.closePath();
        ctx.stroke();

        // pacman
        ctx.beginPath();
        ctx.arc(600, 150, 80, Math.PI * 0.2, Math.PI * 1.8, false);
        ctx.lineTo(600,140 ); //une seule ligne et close pour la fermeture
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

}, 1000 / 60);
*/
// je pose la main sur la feuille


let startAngle = 42;
let direction =-1;

setInterval(function () {
        // nettoie la trainé supprime et déplace
        ctx.clearRect(0,0, w, h);

        ctx.beginPath();

        // création du carré
        ctx.rect(300, 300, 200, 200);

        // remplir de couleur, par défaut c'est noir
        ctx.fill();

        ctx.beginPath();
        // false : dans le sens des aiguilles du montre
        // point d'origine
        ctx.arc(250, 200, 80, 0, Math.PI * 1, false);
        ctx.closePath();

        // fill corde d'un cercle, stroke représente bien le trait cercle
        ctx.stroke();
        ctx.fill();


        ctx.beginPath();
        // false : dans le sens des aiguilles du montre
        // point d'origine
        ctx.arc(250, 200, 80, 0, Math.PI * 1, false);
        ctx.closePath();

        // fill corde d'un cercle, stroke représente bien le trait cercle
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();

        ctx.moveTo(440, h/2-40); // déplacement de la main
        ctx.lineTo(400, h/2+40); // pose le crayon dessine de x à y
        ctx.lineTo(480, h/2+40);
        ctx.closePath();
        ctx.stroke();

        if (startAngle <=0) {
            direction = 1;
        } else if (startAngle>=40) {
            direction = -1;
        }

        startAngle += (1.5*direction); // ouverture de 5 pas d'un coup
        // pacman
        ctx.fillStyle = "purple";
        ctx.beginPath();
        ctx.arc(600, 150, 42, (Math.PI/180) * startAngle,(Math.PI/180) * (360 - startAngle), false);
        ctx.lineTo(600,150 ); //une seule ligne et close pour la fermeture
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

}, 1000 / 60);




