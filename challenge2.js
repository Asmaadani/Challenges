const prompt=require('prompt-sync')();


let array=[];
for(i=0;i<10;i++){
    let nombre=Number(prompt("entrer le nombre :"));
    array.push(nombre);
    console.log(array);
    for(let arr of array){
    let somme=array.reduce((acc,val)=>acc+val,0);
    console.log('la somme:'+somme);
        break;
}
}

