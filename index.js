const nomeCompleto = "Kaue Phelipe";
const anoNacimento = 2005;
let anoAtual = 2024;
let idade = 19;

console.log("Olá eu sou " + nomeCompleto + " estamos no ano " + anoAtual + " minha idade é " + idade + " e sou nacidado no ano" +   anoNacimento );

anoAtual = anoAtual + 1;
idade = idade  + 1
console.log(anoAtual)

console.log("Olá eu sou " + nomeCompleto + "estamos no ano " + anoAtual + " minha idade é " + idade + " e eu nasci no ano de " + anoNacimento)

console.log(`oi eu sou ${nomeCompleto} meu ano é ${anoNacimento} minha idade é ${idade}`)

const listaDeViagens = new Array(
  ` Estados Unidos`,
  `Egito`,
  `turquia`,
  `japão`,
  `mexico`

);

console.log(listaDeViagens);
console.log(listaDeViagens[4])
listaDeViagens.push("Coronel Vivida");
console.log(listaDeViagens);
listaDeViagens.splice(1,1);
console.log(listaDeViagens);

const idadeComprador = 24;

if(idadeComprador < 18){
  console.log("Não altorisado voce é menor de idade")
}
if(idadeComprador >= 18){
  console.log("qual o seu destino?")
}