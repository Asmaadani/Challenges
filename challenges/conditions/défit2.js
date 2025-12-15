const prompt=require('prompt-sync')();

let nbr=Number(prompt('entrer un nombre de votre choix:'));

if (nbr>0){
    console.log('positif');
}else if(nbr<0){
    console.log('négatif');
}else{
    console.log('null');
}