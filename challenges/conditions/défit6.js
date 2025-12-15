const prompt=require('prompt-sync')();

let année=Number(prompt("entrer l'année que vous voulez vérifier :"));

if(année%4==0 && année%100!=0 || année%400==0){
    console.log("l'année est bissextile.")
}else{
    console.log("l'année n'est pas bissextile.")
}