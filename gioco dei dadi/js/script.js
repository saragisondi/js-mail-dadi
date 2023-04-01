
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const btn = document.querySelector('button')
btn.addEventListener('click', function(){
  //genero numeri random
  const numberPC =  Math.floor(Math.random()* 6) +1;
  document.querySelector('.pc').innerHTML = ( numberPC)
  console.log(numberPC)
  
  const numberUser = Math.floor(Math.random()* 6) +1;
  console.log(numberUser)
  document.querySelector('.user').innerHTML = (numberUser)
  
  const msg = document.querySelector('h1')
  
  //stabilire il vincitore
  if (numberUser < numberPC) {
    console.log('PC','vince il computer!')
    msg.innerHTML = ` Vince il COMPUTER!`
  }else{
    console.log('USER','Hai vinto!')
    msg.innerHTML = `Hai vinto!`
  }

})




// const btn = document.querySelector("button");
// console.log(btn)

// //PLAYER
// btn.addEventListener('click', function (){

// const player_a = Math.ceil (Math.random() * 6)
// const player_b = Math.ceil (Math.random() * 6)


// console.log(player_a, player_b);
// })

// let message;

// if(player_a>player_b){
//   message= "vince A"
// }else if(player_a<player_b){
//   message = "Vince B"
// }else{
//   message="Pari!"
// }

// console.log(message);