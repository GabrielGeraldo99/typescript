// Literals são tipos representados por conteúdos específicos
// Variáveis const são automaticamente literals,
// mas variáveis let também podem ser tipadas como literals
let literal: "Hello, World!"  // O tipo literal é restrito a "Hello, World!"
let pi: 3.14159               // O tipo literal é restrito a 3.14159

// Não é possível atribuir nenhum valor a um literal
literal = "Hi, World!"  // produz erro: o valor "Hi, World!" não é permitido para o tipo literal "Hello, World!"
pi = 3                  // produz erro: o valor 3 não é permitido para o tipo literal 3.14159


// Unions são tipos que unem diferentes possibilidades de tipos
// Eles são definidos usando o caractere pipe "|"
let option: string | number  // O tipo pode ser uma string ou um número

option = 1     // válido: 1 é um número
option = "1"   // válido: "1" é uma string
option = false // produz erro: false não é nem uma string nem um número

// Ao unirmos Unions com Literals temos um resultado muito interessante
let planet: "Mercúrio" | "Vênus" | "Terra" | "Marte" | "Júpiter" | "Saturno" | "Urano" | "Netuno" | "Plutão"

// Com isso o autocompletar da IDE se torna ainda mais poderoso
if (planet === "Terra") {
  console.log("Estamos na Terra");  // Verifica se o planeta é "Terra" e imprime uma mensagem no console
}


// Uma forma ainda mais flexível de usar os tipos é criando um Alias
// Um Alias é definido usando a palavra type e existe uma convenção de se utilizar PascalCase
type Planet = "Mercúrio" | "Vênus" | "Terra" | "Marte" | "Júpiter" | "Saturno" | "Urano" | "Netuno" | "Plutão"

// Um Alias é um nome personalizado para um tipo e pode ser atribuído a outras variáveis
let homePlanet: Planet  // A variável homePlanet pode ser qualquer um dos valores definidos no tipo Planet
homePlanet = "Terra"    // válido: "Terra" é um dos valores permitidos

// Também é possível utilizar um Alias para declarar arrays personalizados
let milkyWay: Planet[]  // Um array de Planets

// Repare que usando um Alias temos acesso ao autocompletar
// dentro do escopo da função e temos um código muito mais 
// limpo que se usássemos a definição inteira do tipo Planet
function checkPlanet(planet: Planet) {  // A função espera um parâmetro do tipo Planet
  if (planet === "Terra") {
    console.log("Estamos na Terra")  // Verifica se o planeta é "Terra" e imprime uma mensagem no console
  }
}

// No TypeScript também podemos definir um Alias para uma função
// Podemos fazer isso através da sintaxe de arrow functions
// mencionando os parâmetros e o tipo de retorno
type GreetingCallback = (name: string) => void  // Um tipo de função que aceita uma string e não retorna nada

// A partir disso podemos anotar esse tipo
function greet(callback: GreetingCallback) {  // A função espera um callback do tipo GreetingCallback
  const name = prompt("Qual é o seu nome?")  // Pede o nome do usuário

  callback(name)  // Chama o callback com o nome fornecido
}

// E ao definir nosso callback temos acesso às informações
// sobre o seu tipo e retorno para nos auxiliar
greet((name) => {  // Define um callback que exibe um alerta com uma saudação
  alert(`Olá, ${name}! Essa é uma saudação executada como callback!`)
})
