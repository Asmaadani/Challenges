const prompt=require('prompt-sync')();

<<<<<<< HEAD

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

=======
let nombre=Number(prompt('entrer le nombre à vérifier :'));

let premier=true;
if(nombre>=2){
    for(let i=2; i<nombre; i++){
        if(nombre % i ==0){              
            premier = false;
            break; 
        }
    }
    if(premier){
        console.log('le nombre est premier');
    }else{
        console.log("le nombre n'est pas premier" );
    }
    
}else{
    console.log('nothing else');
}
//nbr>=2
// ayy haja kan9smha 3la wahd ra9m w kat3tini un reste = premier
>>>>>>> 2021f504d5079af09f307544655d7daef95163d2
