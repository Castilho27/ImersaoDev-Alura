function jogar(){
	rodada = 1
	while(rodada <=3) {
		console.log("Rodada:" + rodada)

		escolhaJogador = prompt("Nivel" + rodada + ", Qual fio você deseja cortar? Vermelho, Amarelo ou Azul ?")
	 	mapafios = {
		 Vermelho: 1,
     Amarelo: 2,
     Azul: 3 
	};
		if (!mapafios.hasOwnProperty(escolhaJogador)) {
  alert("Escolha inválida!");
  continue;
}
		bombaexplodida = Math.floor(Math.random()*3) + 1;
	
	if(mapafios[escolhaJogador] === bombaexplodida){
		alert("💥 Bomba Explodiu! Obrigado pelos seus serviços!")
		rodada = 1000;
	}
		else {
		alert("Cortou o certo, continue!
	}
		
	rodada = rodada + 1
}
if(rodada == 4){
	alert("Você venceu! Parabens!")
}}