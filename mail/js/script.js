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

//CICLO
i= 0;
for(let i = 0; i < mailList.length; i++){
  if (!(i === 0))
  console.log(mailList[i]);
}
//PROMPT
const mail = prompt('inserisci la tua mail')
console.log(mail)

//CONFRONTO 
