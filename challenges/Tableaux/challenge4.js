const prompt=require('prompt-sync')();

let table=[];
for(i=0;i<3;i++){
    let ch=prompt('entrer 3 chaines de caractères :');
    table.push(ch);
    console.log(table);
}
    let search=prompt('entrer ce que vous cherchez :');
    for(j=0;j<table.length;j++){
        if(search===table[j]){
            console.log("existe dans",[j]);
            break;
        }
    };
