const prompt=require('prompt-sync')();

let liste=[];
for (i=1;i<=11;i++){
    // let liste=[];
    let nbr=Number(prompt('entrer le nombre:'));
    if(nbr>0){
        liste.push(nbr);
        // console.log('la liste :',liste);
        // let Somme = liste.reduce((acc, t) => acc + t, 0);
        // console.log('la somme des nombres :',Somme);
    }else{
        console.log("entrer nombre positif");
    }
    console.log(liste);
    let Somme = liste.reduce((acc, t) => acc + t, 0);
    console.log('la somme des nombres :',Somme);
}