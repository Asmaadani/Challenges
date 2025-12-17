const p=require('prompt-sync')();

let age=Number(p("entrer votre age :"));
let permis=p("est ce que vous avez un permis de conduire ? répond par(oui/non) :");
let véhicule=p("est ce que vous avez un véhicule ? répond par (oui/non) :");

if(age>=18 && permis==="oui" && véhicule==="oui"){
    console.log("Prêt à conduire");
}else{
    console.log("dommage il y'a du manque");
}