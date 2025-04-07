// PARTE 1: Lista de perguntas e respostas
let perguntas = [
  {
    pergunta: "O que é Machine Learning?",
    respostas: [
      { opcao: "Um software de design gráfico", correto: false },
      { opcao: "Um conjunto de técnicas para computadores aprenderem com dados", correto: true },
      { opcao: "Uma linguagem de programação", correto: false }
    ]
  },
  {
    pergunta: "Qual é o papel da ciência de dados nas empresas?",
    respostas: [
      { opcao: "Criar redes sociais", correto: false },
      { opcao: "Otimizar processos e prever resultados com base em dados", correto: true },
      { opcao: "Substituir todos os funcionários por robôs", correto: false }
    ]
  },
  {
    pergunta: "Qual destas é uma aplicação real de Machine Learning?",
    respostas: [
      { opcao: "Previsão de vendas", correto: true },
      { opcao: "Criar senhas simples", correto: false },
      { opcao: "Instalar programas", correto: false }
    ]
  },
  {
    pergunta: "O que é necessário para treinar um modelo de aprendizado de máquina?",
    respostas: [
      { opcao: "Somente criatividade", correto: false },
      { opcao: "Dados históricos e algoritmos", correto: true },
      { opcao: "Wi-Fi potente", correto: false }
    ]
  },
  {
    pergunta: "Qual das opções representa um benefício do uso de Machine Learning?",
    respostas: [
      { opcao: "Aumentar o consumo de energia", correto: false },
      { opcao: "Tomada de decisão mais eficiente e baseada em dados", correto: true },
      { opcao: "Deixar os processos mais lentos", correto: false }
    ]
  },
  {
    pergunta: "Qual linguagem é muito usada em Machine Learning?",
    respostas: [
      { opcao: "Python", correto: true },
      { opcao: "HTML", correto: false },
      { opcao: "CSS", correto: false }
    ]
  },
  {
    pergunta: "O que é overfitting?",
    respostas: [
      { opcao: "Quando o modelo aprende muito bem e generaliza melhor", correto: false },
      { opcao: "Quando o modelo aprende demais os dados de treino e erra nos novos", correto: true },
      { opcao: "Quando o modelo usa muitas cores", correto: false }
    ]
  },
  {
    pergunta: "O que é um dado rotulado?",
    respostas: [
      { opcao: "Dado com preço", correto: false },
      { opcao: "Dado com resposta conhecida", correto: true },
      { opcao: "Dado armazenado em rótulos físicos", correto: false }
    ]
  },
  {
    pergunta: "Qual dessas áreas usa Machine Learning?",
    respostas: [
      { opcao: "Moda", correto: true },
      { opcao: "Culinária sem dados", correto: false },
      { opcao: "Apenas empresas de TI", correto: false }
    ]
  },
  {
    pergunta: "Qual biblioteca Python é famosa para Machine Learning?",
    respostas: [
      { opcao: "Pandas", correto: false },
      { opcao: "TensorFlow", correto: true },
      { opcao: "Bootstrap", correto: false }
    ]
  }
];

// Embaralha a ordem das perguntas
perguntas = perguntas.sort(() => Math.random() - 0.5);

// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");
const vidasElemento = document.getElementById("vidas");

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0;
let acertos = 0;
let vidas = 3;

// PARTE 4: Atualiza o contador de vidas na tela
function atualizarVidas() {
  let coracoes = "";
  for (let i = 0; i < 3; i++) {
    coracoes += i < vidas ? "❤️" : "🖤";
  }
  vidasElemento.textContent = coracoes;
}

// PARTE 5: Função para carregar uma nova pergunta
function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`;
  const perguntaAtual = perguntas[indiceAtual];
  perguntaElemento.innerHTML = perguntaAtual.pergunta;

  respostasElemento.innerHTML = "";

  perguntaAtual.respostas.forEach((resposta) => {
    const botao = document.createElement("button");
    botao.classList.add("botao-resposta");
    botao.innerText = resposta.opcao;

    botao.onclick = function () {
      if (resposta.correto) {
        acertos++;
      } else {
        vidas--;
        atualizarVidas();

        if (vidas <= 0) {
          return mostrarGameOver();
        }
      }

      indiceAtual++;

      if (indiceAtual < perguntas.length) {
        carregarPergunta();
      } else {
        finalizarJogo();
      }
    };

    respostasElemento.appendChild(botao);
  });
}

// PARTE 6: Função para mostrar a tela final
function finalizarJogo() {
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`;
  conteudo.style.display = "none";
  conteudoFinal.style.display = "flex";
}

// PARTE 7: Game Over por falta de vidas
function mostrarGameOver() {
  textoFinal.innerHTML = `😵 Você perdeu todas as vidas!<br>Acertos: ${acertos} de ${perguntas.length}`;
  conteudo.style.display = "none";
  conteudoFinal.style.display = "flex";
}

// PARTE 8: Iniciando o jogo
atualizarVidas();
carregarPergunta();
