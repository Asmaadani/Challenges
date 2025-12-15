const prompt=require('prompt-sync')();

let nbr=Number(prompt('entrer le nombre :'));


switch(true){
    case (nbr >= 90):
        console.log('A');
        break;
    case (nbr >= 80):
        console.log('B')
        break;
    case (nbr >= 70):
        console.log('C')
        break;
    case (nbr >= 60):
        console.log('D')
        break;
    default:
        console.log('F');
}

// if (nbr >= 90) {
//     console.log('A');
// } else if (nbr >= 80) {
//     console.log('B');
// } else if (nbr >= 70) {
//     console.log('C');
// } else if (nbr >= 60) {
//     console.log('D');
// } else {
//     console.log('F');
// }



// if(90<nbr && nbr<100){
//     console.log('A')
// }else if(80<nbr && nbr<89){
//     console.log('B')
// }else if(70<nbr && nbr<79){
//     console.log('C')
// }else if(60<nbr && nbr<69){
//     console.log('D')
// }else{
//     console.log('F')
// }
