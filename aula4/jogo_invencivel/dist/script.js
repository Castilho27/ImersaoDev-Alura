function jogar(){
  let herois=[
    {nome:"Invencivel",poder:8},
    {nome:"Omni-Man",poder:10},
    {nome:"Eve Atômica",poder:9},
    {nome:"Garota Monstro",poder:6},
    {nome:"Rexplode",poder:5},
    {nome:"Dupli-Kate",poder:5},
    {nome:"Allen",poder:8},
    {nome:"Thaedus",poder:7},
    {nome:"Best Tiger",poder:7},
    {nome:"Bulletproof",poder:6},
    {nome:"Black Samson",poder:5},
    {nome:"Fera de Batalha",poder:9}
  ]

  let viloes=[
    {nome:"Conquest",poder:10},
    {nome:"Thragg",poder:10},
    {nome:"Anissa",poder:9},
    {nome:"Kregg",poder:7},
    {nome:"Lucan",poder:6},
    {nome:"General Zandale",poder:5},
    {nome:"Komodo Dragão",poder:5},
    {nome:"Ursaal",poder:8},
    {nome:"Killcannon",poder:4},
    {nome:"Mauler",poder:5},
    {nome:"Titã",poder:6},
    {nome:"Doc Seismic",poder:4},
    {nome:"D.A. Sinclair",poder:5}
  ]

  let meus=[], inimigos=[]
  let forca1=0, forca2=0

  let lista=herois.map(h=>h.nome).join(", ")
  alert("Escolha 3 heróis do Invencível:\n\n"+lista)

  for(let i=0;i<3;i++){
    let escolha=prompt("Herói "+(i+1)).trim()
    let achei=herois.find(h=>h.nome.toLowerCase() == escolha.toLowerCase())
    if(achei){
      meus.push(achei)
      let power=achei.poder + Math.floor(Math.random()*3)
      forca1 += power
    } else {
      alert("Esse herói não está disponível!")
      i--
    }
  }

  for(let i=0;i<3;i++){
    let n = Math.floor(Math.random()*viloes.length)
    let vilao = viloes[n]
    inimigos.push(vilao)
    let power = vilao.poder + Math.floor(Math.random()*3)
    forca2 += power
  }

  let nomes1 = meus.map(p => p.nome).join(", ")
  let nomes2 = inimigos.map(v => v.nome).join(", ")
  let resultado = document.getElementById("resultado")

  if(forca1 > forca2){
    resultado.innerHTML = `
      ✅ <strong>Vitória!</strong> O Conquista foi derrotado!<br><br>
      👊 Heróis: ${nomes1}<br>
      💥 Força do time: ${forca1}<br><br>
      😈 Vilões: ${nomes2}<br>
      ⚔️ Força dos vilões: ${forca2}
    `
  } else if(forca2 > forca1){
    resultado.innerHTML = `
      ❌ <strong>Derrota!</strong> A Terra foi tomada!<br><br>
      👊 Heróis: ${nomes1}<br>
      💥 Força do time: ${forca1}<br><br>
      😈 Vilões: ${nomes2}<br>
      ⚔️ Força dos vilões: ${forca2}
    `
  } else {
    resultado.innerHTML = `
      🤝 <strong>Empate!</strong> Um acordo foi selado!<br><br>
      👊 Heróis: ${nomes1}<br>
      💥 Força do time: ${forca1}<br><br>
      😈 Vilões: ${nomes2}<br>
      ⚔️ Força dos vilões: ${forca2}
    `
  }
}