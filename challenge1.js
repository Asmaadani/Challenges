const prompt=require('prompt-sync')();

<<<<<<< HEAD

let array=[];
for(i=1;i<6;i++){
    const entier=Number(prompt('entrer un entier :'));
    array.push(entier);
}
console.log("array:",array);
=======
let nbr=Number(prompt('entrer le nombre à multiplier :'));

for (i=1; i<=10;i++){
    console.log(+nbr,'*'+i,'=',+(nbr*i))
}
>>>>>>> 2021f504d5079af09f307544655d7daef95163d2
