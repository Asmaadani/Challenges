const prompt=require('prompt-sync')();

let mdp=prompt('entrer mot de passe ici :');

let contientChiffre = /\d/.test(mdp); 
let contientcaract = /[!@#$%^&*()_\-+={}[\]:;"'<>,.?/]/.test(mdp); 

if (mdp.length>=8 && contientChiffre && contientcaract){
    console.log('Fort');
}else if(mdp.length>=6 && contientChiffre){
    console.log("Moyen");
}else if(mdp.length<6){
    console.log("Faible ");
}