const prompt=require('prompt-sync')();

let nombre=Number(prompt("entrer le nombre :"));

switch(true){
    case(nombre%3==0):
        console.log("Fizz");
        break;
    case(nombre%5==0):
        console.log("Buzz");
        break;
    case(nombre%3==0 && nombre%5==0):
        console.log("FizzBuzz");
        break;

    default:
        console.log(nombre);
};