const p=require('prompt-sync')();

let prix=Number(p("entrer votre salaire :"));
let statut=p("qu'elle est votre statut? (CDI/CDD/Stage)");

if(statut==="CDI"){
  prix = prix - (prix * 22 / 100);
  console.log(prix);
}else if(statut==="CDD"){
    prix = prix - (prix * 18 / 100);
    console.log(prix);
}else if(statut==="Stage"){
  prix = prix - (prix * 10 / 100);
  console.log(prix);
}else{
    console.log(prix);
}