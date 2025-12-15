const prompt=require('prompt-sync')();

function remplirTableau(){
    let table=[];
    let fois=Number(prompt('entrer combien de nbr voulez vous entrer en tableau :'));
    for(i=0;i<fois;i++){
        let nbr=Number(prompt('ajouter un nombre dans le tableau :'));
        table.push(nbr);
    }        
    console.log('tableau:',table);

}
remplirTableau();
