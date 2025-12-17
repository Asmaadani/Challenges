const p=require("prompt-sync")();

let nom=p('entrer votre nom :')
let age=Number(p("entrer votre age :"))
let email=p("entrer votre email :")
if(nom!==""&& age>=13 && email.includes('@')){
    console.log("Formulaire valide")
}else{
    console.log("Erreur dans le formulaire");
    
}

