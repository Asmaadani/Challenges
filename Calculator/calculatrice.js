const p = require('prompt-sync')(); 

let historique = [];

function addition(nb1, nb2){
    let total = nb1 + nb2;
    console.log(`${nb1}+${nb2}=${total}`);
    historique.push(total);
}

function soustraction(nb1, nb2){
    let total = nb1 - nb2;
    console.log('nb1 - nb2 =', total);
    historique.push(total);
}

function multiplication(nb1, nb2){
    let total = nb1 * nb2;
    console.log('nb1 * nb2 =', total);
    historique.push(total);
}

function division(nb1, nb2){
    if(nb2 === 0){
        console.log("Erreur : division par zéro impossible");
    } else {
        let total = nb1 / nb2;
        console.log('nb1 / nb2 =', total);
        historique.push(total);
    }
}

function puissance(nb1, nb2){
    let total = Math.pow(nb1, nb2);
    console.log('nb1 ^ nb2 =', total);
    historique.push(total);
}

function racine_carrée(nb){
    if(nb < 0){
        console.log("Erreur : faut être un nombre positif");
        return;
    } else {
        let total = Math.sqrt(nb);
        console.log('√nb1 =', total);
        historique.push(total);
    }
}

function factorielle(nb){
    if(nb < 0){
        console.log("Erreur : factorielle d'un nombre négatif");
        return;
    }
    let total = 1;
    for(let i = 1; i <= nb; i++){
        total *= i;
    }
    console.log(nb + '! =', total);
    historique.push(total);
}

while(true){

    let choix = p("\nEntrer votre choix (+,-,*,/,^,sqrt,!, break) : ");

    if(choix === "break"){
        console.log("Fin du programme");
        break; 
    }

    let nb1 = Number(p("Entrer le nombre 1 : "));
    let nb2;

    if(choix !== "sqrt" && choix !== "!"){
        nb2 = Number(p("Entrer le nombre 2 : "));
    }

    if(choix == "+"){
        addition(nb1, nb2);
    } 
    else if(choix == "-"){
        soustraction(nb1, nb2);
    } 
    else if(choix == "*"){
        multiplication(nb1, nb2);
    } 
    else if(choix == "/"){
        division(nb1, nb2);
    } 
    else if(choix == "^"){
        puissance(nb1, nb2);
    } 
    else if(choix == "sqrt"){
        racine_carrée(nb1);
    } 
    else if(choix == "!"){
        factorielle(nb1);
    } 
    else{
        console.log("Votre choix n'est pas disponible");
    }

    console.log("Historique des calculs :", historique);
}
