const p=require('prompt-sync')();

let pay=p("entrer ton pays :");
let age=Number(p("entrer votre age :"));

if(pay!=="france" && pay!=="USA"){
    console.log("Erreur : doit etre un soit france ou USA");
    return;
}else if(pay==="france"&&age>=18 || pay==="USA" && age>=21){
    console.log("tu es Majeur");
}else{
    console.log("tu es Mineur");
}