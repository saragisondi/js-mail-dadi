
//ARRAY
const number =[
  1,
  2,
  3,
  4,
  5,
  6
]
console.log(number)

const btn = document.querySelector("button");
console.log(btn)

//PLAYER
btn.addEventListener('click', function (){
  let randomPlayer = Math.floor( Math.random() * (number[i])+1)
  console.log(randomPlayer)
})
for (i=1; i<=number ; i++);

//COMPUTER 
btn.addEventListener('click', function (){
  let randomPc = Math.floor( Math.random() * (number[i])+1)
  console.log(randomPc)
})

let= vincitore ="false"

for (let i=1; i<=number ; i++){
  if (randomPlayer > randomPc){
    vincitore="true";
  }
  console.log('Giocatore 1, Hai vinto!');
  document.getElementById('output').innerHTML= `
  Hai vinto!
  `
if(randomPlayer< randomPc){
  console.log('Giocatore 1, Hai perso!')
}
    document.getElementById('output').innerHTML= `
    Hai perso!
    `
}
