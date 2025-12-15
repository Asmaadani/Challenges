const prompt=require('prompt-sync')();


function tableMultiplication(){
    let ch=Number(prompt('entrer le nombre à miltiplier :'));
    for (i=0;i<=10;i++){
        console.log(ch,'*',i,'=',ch*i);
    }
}
tableMultiplication();