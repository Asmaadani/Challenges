const prompt=require('prompt-sync')();

let ligne=Number(prompt('entrer le nombre de ligne :'));
for(i=1;i<=ligne;i++){
    let etoiles = "*".repeat(2 * i - 1); 
    let décalage=" ".repeat(ligne-i);
    console.log(décalage,etoiles);
}