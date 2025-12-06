const prompt=require('prompt-sync')();

let nbr=Number(prompt('entrer le nombre à multiplier :'));

for (i=1; i<=10;i++){
    console.log(+nbr,'*'+i,'=',+(nbr*i))
}
