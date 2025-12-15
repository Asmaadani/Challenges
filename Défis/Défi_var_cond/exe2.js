const prompt=require('prompt-sync')();

let deviner=Number(prompt('deviner un nombre :'));

if(deviner>8){
    console.log("trop haut")
}else if(deviner<8){
    console.log("trop bas")
}else{
    console.log("Exact !")
}