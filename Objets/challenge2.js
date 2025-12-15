const prompt=require('prompt-sync')();
// 1__________________________________
// const etudiant= {
//     nom:"asmaa",
//     age:20,

//     sePresenter:function(){
//         console.log("Bonjour, je m'appele "+this.nom,"et j'ai "+this.age,"ans");
//     }

// };
// etudiant.sePresenter();
// 2___________________________________________
// const personne = {
//     nom: "Asmaa",
//     age: 25,
//     pays: "Maroc",
//     profession: "Développeuse"
// };

// for (let cle in personne) {
//     console.log(cle + " : " + personne[cle]);
// }

// 3______________________________________________
// class Personne {
//     constructor() {
//         this.etudiants = ["asmaa", "Amira", "Safaa", "saad", "Ziad"];
//     }

//     afficherEtudiants() {
//         for (let i = 0; i < this.etudiants.length; i++) {
//             console.log(this.etudiants[i]);
//         }
//     }
// }

// const p = new Personne();
// p.afficherEtudiants();
// 4____________________________________________
// const Livre = {
//     liste: [
//         { titre: "La Boîte à Merveilles", auteur: "Ahmed Sefrioui", annee: 1985 },
//         { titre: "L'Étranger", auteur: "Albert Camus", annee: 1942 },
//         { titre: "Voyage au bout de la nuit", auteur: "Louis-Ferdinand Céline", annee: 1932 }
//     ],

//     boucle() {
//         for (let i = 0; i < this.liste.length; i++) {
//             console.log(this.liste[i].titre);
//         }
//     }
// };

// Livre.boucle();
// 5_________________________________________________
// const Livre = {
//     livres: [ 
//         { titre: "Candide", nom: "Voltaire" },
//         { titre: "le soir", nom: "Ouadih Dada" },
//     ],

//     trouverLivre(titre) {
//         return this.livres.find(livre => livre.titre === titre) || null;
//     }
// };

// console.log(Livre.trouverLivre("le soir"));

