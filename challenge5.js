const prompt=require('prompt-sync')();

let table=[];
for(i=0;i<7;i++){
    let int=Number(prompt("entrer 7 entier :"));
    table.push(int);

}
    console.log(table);
console.log("le plus grand nombre est :", Math.max(...table));
console.log("le plus petit nombre est :", Math.min(...table));



