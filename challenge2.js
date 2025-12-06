const prompt=require('prompt-sync')();

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
