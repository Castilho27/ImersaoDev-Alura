function wons() {
let valor_wons = prompt("Digite um valor em Wons");
  if (valor_wons) {
      let um_won = 0.0039
      let valor_final = valor_wons * um_won
          alert(" O valor convertido em reais é R$" + valor_final) }
  else {
    alert("Por favor, insira um valor válido") }
   }
  
function euros() {
let valor_euros = prompt("Digite um valor em Euros");
  if (valor_euros) {
      let um_euro = 6.23
      let valor_final_e = valor_euros * um_euro
          alert(" O valor convertido em reais é R$" + valor_final_e) }
  else {
    alert("Por favor, insira um valor válido") }
   }

function dollar() {
let valor_dollar= prompt("Digite um valor em Dollar");
  if (valor_dollar) {
      let um_dollar = 5.63
      let valor_final_d = valor_dollar * um_dollar
          alert(" O valor convertido em reais é R$" + valor_final_d) }
  else {
    alert("Por favor, insira um valor válido") }
   }