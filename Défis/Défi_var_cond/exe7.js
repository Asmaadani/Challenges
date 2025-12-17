const p=require('prompt-sync')();

let note=Number(p('entrer une note entre 0 et 20 :'))

if(note==20){
    console.log('Parfait');
}else if(note<20 && note>=16){
    console.log('Très bien');
}else if(note<16 && note>=12){
    console.log("Assez bien");
}else if(note<12 && note>=10){
    console.log("Peut mieux faire");
}else if(note<10){
        console.log("Echec");
}else{
    console.log("Note invalide");
}