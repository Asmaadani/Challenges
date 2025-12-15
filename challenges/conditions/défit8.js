const prompt=require('prompt-sync')();

let choix=prompt('entrer la couleur que vous choisisez :');

if(choix=="jaune"){
    console.log('Préparez-vous');
}else if(choix=="rouge"){
    console.log('Arrêt');
}else{
    console.log('Allez');
}