function jogar() {
      let audio = new     Audio("https://www.myinstants.com/media/sounds/zelda-chest.mp3"); 
  audio.play(); 
idade = prompt("Quantos anos você tem?") 
if(idade < 16) {
  alert("Volte mais tarde!") }
if(idade >= 16) { 
  alert("Você pode se torna um elementista")
  escolhaJogador = prompt("Digite 1-Água 2-Fogo ou 3-Ácido?")
   let elementos = ["Água", "Fogo", "Ácido"];
  escolhaComputador = Math.floor(Math.random() * 3) + 1;
  alert("Você escolheu: " + elementos[escolhaJogador - 1]);
  alert("O mestre escolheu: " + elementos[escolhaComputador - 1]);
if(escolhaJogador == escolhaComputador)
    alert("Os elementos se dispersaram")
  
 if(escolhaJogador == 1){
   if(escolhaComputador == 2){
     alert("Você venceu o mestre")
   }
}
 if(escolhaJogador == 1){
   if(escolhaComputador == 3){
     alert("Você perdeu para o mestre")
}}
if(escolhaJogador == 2){
   if(escolhaComputador == 3){
     alert("Você venceu o mestre")
   }
}
 if(escolhaJogador == 2){
   if(escolhaComputador == 3){
     alert("Você perdeu para o mestre")
}}
  if(escolhaJogador == 3){
   if(escolhaComputador == 1){
     alert("Você venceu o mestre")
   }
}
 if(escolhaJogador == 3){
   if(escolhaComputador == 2){
     alert("Você perdeu para o mestre")

   }}}
}