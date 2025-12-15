const prompt=require('prompt-sync')();

let age=Number(prompt('entrer votre age :'));

if(age>=18){
    console.log('Éligibldeux au vote');
}else{
    console.log('Non éligible');
}