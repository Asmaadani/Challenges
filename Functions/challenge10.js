const prompt=require('prompt-sync')();

function fusionner(tab1, tab2) {
    let result = [];

    for (let i = 0; i < tab1.length; i++) {
        result.push(tab1[i]);
    }
    for (let j = 0; j < tab2.length; j++) {
        result.push(tab2[j]);
    }

    return result;
}

console.log(fusionner([1, 2, 3], [4, 5, 6]));
