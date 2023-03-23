//ARRAY
const mailList = [
  "sara@virgilio.it", 
  "mirko@virgilio.it", 
  "martina@virgilio.it",
  "giovanni@virgilio.it",
  "maria@virgilio.it",
  "lucrezia@virgilio.it",
  "lara@virgilio.it",
  "jessica@virgilio.it",
  "laura@virgilio.it",
  "ombretta@virgilio.it"
]
console.log(mailList);

//PROMPT
const mail = prompt('inserisci la tua mail')
console.log(mail)
//CICLO e CONFRONTO 
let trovato = "false";

for(let i = 0; i < mailList.length; i++){
  if (mail === mailList[i]){
    trovato = "true";
  }
  console.log(mailList[i]);
}

if (trovato === "true"){
  console.log('login effettuato');
  document.getElementById('output').innerHTML = "Accesso Eseguito"
}else{
  console.warn('errore');
  document.getElementById('output').innerHTML = "Accesso Negato"
}
