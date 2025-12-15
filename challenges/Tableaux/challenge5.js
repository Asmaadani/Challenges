const prompt=require('prompt-sync')();

let array=[];
for(i=0;i<7;i++){
    let int=Number(prompt("entrer 7 entiers :"));
    array.push(int);
}
console.log('le maximum est:',Math.max(...array));
console.log('le minimum est:',Math.min(...array))