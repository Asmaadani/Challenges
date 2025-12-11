const prompt = require('prompt-sync')();

function filterPairs() {
    let tab = [];
    let nbr = Number(prompt('Enter how many numbers to add : '));

    for (let i = 0; i < nbr; i++) {
        let elem = Number(prompt('Enter an element : '));
        tab.push(elem);
    }

    console.log('Le tableau original :', tab);

    let tabTwo = []; 

    for (let j = 0; j < tab.length; j++) {
        if (tab[j] % 2 === 0) {  
            tabTwo.push(tab[j]);  
        }
    }

    console.log('Le tableau des nombres pairs :', tabTwo);
}
filterPairs();
