const prompt = require('prompt-sync')();

function motsLongs(tabMots, longueur) {
    let result = [];

    for (let i = 0; i < tabMots.length; i++) {
        if (tabMots[i].length >= longueur) {
            result.push(tabMots[i]);
        }
    }

    console.log(result);
}

motsLongs(["Bonjour", "Mme", "Asmaa", "cv"], 4);
