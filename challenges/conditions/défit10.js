const prompt=require('prompt-sync')();

let name=prompt("entrer username :");
let mdp=prompt("entrer le mot de passe :");

if(name==="admin" && mdp==="1234"){

    console.log("Bienvenue Admin");

}else if (name==="admin" && mdp!=="1234"){

    console.log('Mot de passe incorrec');
}else{

    console.log('Utilisateur introuvable');
};