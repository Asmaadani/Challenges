const prompt=require('prompt-sync')();

let table=[]
for (i=1;i<9;i++){
    let nbr=Number(prompt('entrer 8 entiers de votre choix :'));
    table.push(nbr);
    console.log(table);
}

    let search = Number(prompt('Le nombre à chercher : '));

    let found = false;  

    for (let i = 0; i < table.length; i++) {
        if (table[i] === search) {
            console.log("Existe dans l'index", i);
            found = true;
            break; 
        }
    }

    if (!found) {
        console.log("N'existe pas");
    }