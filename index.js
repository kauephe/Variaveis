const prompt = require('prompt-sync');
const entrada = prompt();

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

const loginCerto = "kaue phelipe";
const senhaCerto = 123456;
console.log("============================================================");
console.log("=================AGÊNTES DE VIAGENS=========================");
console.log("============================================================");

console.log("Faça seu login");

var login = entrada("digite seu login: ");
var senha = entrada("digite sua senha: ");

while(login != loginCerto){
  console.log("Login Incorreto");
  login = entrada("digite seu login novamente: ")
}
while(senha != senhaCerto){
  console.log("Senha Incorreta");
  senha = entrada("digite sua senha novamente: ");
}

const listaDeViagens = new Array(
  "Estados Unidos🇺🇲",
   `Suiça`,
   `Tailândia`,
   `Japão`,
   `Mexico`
)

console.log(listaDeViagens);
console.log(listaDeViagens[4])
listaDeViagens.push("Coronel Vivida");
console.log(listaDeViagens);
listaDeViagens.splice(1,1);
console.log(listaDeViagens);

var nomeComprador = entrada("Digite seu nome: ");
var idadeComprador = entrada("qual é a sua idade? ");

if(idadeComprador < 18){
  
  console.log(` ola ${nomeComprador} voce não pode comprar a passagem já que sua idade é de ${idadeComprador} ano `);
  
}
if(idadeComprador >= 18){
  console.log("qual o seu destino?")
 }