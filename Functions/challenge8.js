const prompt=require('prompt-sync')();


let array=[];
function moyenne(){
    let nbr=Number(prompt('entrer combien de fois voulez-vous entrer un nombre :'));
    for (i=0;i<nbr;i++){
        let el=Number(prompt('entrer le nombre :'));
        array.push(el);
    }
    console.log(array);
    let somme=array.reduce((a,b)=>a+b,0);
    let moyenne=somme/nbr;
    console.log("la moyenne des nombre",moyenne);
}
moyenne();