// 1____________________________________________
// const entreprise={
//     adresse:{rue:"Mohammed V",ville:"Béni mellal",codePostal:20205}
// }

// console.log(entreprise.adresse.ville);

// 2____________________________________________
// const produit={
//     objet:[{nom:"khmira",prix:10,quantite:3},
//         {nom:"BIMO",prix:20,quantite:5},
//     ],

//     Total(){
//         for(i=0;i<this.objet.length;i++){
//             console.log('le totale de produit',i,'est :',this.objet[i].prix*this.objet[i].quantite);
//         }
//     }
// }
// produit.Total();
// 3___________________________________________
// class Animal {
//     constructor(nom, type) {
//         this.nom = nom;
//         this.type = type;
//     }

//     parler() {
//         console.log(`le ${this.nom} fait de bruit.`);
//     }
// }

// const chien = new Animal("chien", "de compagnie");

// chien.parler();
// 4__________________________________________________
// const employes=[
//     {nom:"anouar","salaire":3500},
//     {nom:"khaoula","salaire":1500},
//     {nom:"Saad","salaire":20000}
// ]
//         for(let i=0;i<employes.length;i++){
//             if(employes[i].salaire >3000){
//                 console.log(employes[i]);
//             }
//         }
// 5__________________________________________________
function cloner(obj) {
  return { ...obj };
}

const premier = { nom: "asmaa", age: 20 };
const copie = cloner(premier);

console.log(copie);
