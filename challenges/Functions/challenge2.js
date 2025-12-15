const prompt=require('prompt-sync')();

// function sommeTableau(a,b){
//     let somme=a+b;
//     console.log('la somme des nombres :',somme);
// }
// sommeTableau(2,3);



// ____________________________________________________________________

function sommeTableau() {
    let array = [];
    let nombre = Number(prompt('Combien de nombres voulez-vous ajouter : '));

    for (let i = 0; i < nombre; i++) {
        let nbr = Number(prompt('Entrez le nombre à ajouter : '));
        array.push(nbr);
    }
    let somme = array.reduce((a, b) => a + b, 0);

    console.log('Tableau :', array);
    console.log('La somme des nombres :', somme);
}

sommeTableau();
