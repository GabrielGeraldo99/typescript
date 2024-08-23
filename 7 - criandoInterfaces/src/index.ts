// Uma Interface é outra maneira de
// declarar um tipo para um objeto,
// portanto funciona de forma semelhante

// Criação de uma interface
interface CelestialBody {
  name: string;
  mass: number;
}

// Interfaces podem ser herdadas ou herdar umas às outras
interface Star extends CelestialBody {
  age: number;
  planets: Planet[];
}

interface Planet extends CelestialBody {
  population: number;
  createSatellite: (name: string) => void;
  orbitedStar: Star; // Incluído na interface para `Planet`
}

// Remova a declaração duplicada de `sun` e ajuste o tipo para `Star`
let sun: Star = {
  name: "Sol",
  mass: 1.989 * (10 ** 30),
  age: 4.603 * (10 ** 9),
  planets: []
};

// Classes podem implementar interfaces
// Nesse caso ela cria o que chamamos de contrato,
// pois obriga a classe a implementar tudo o que
// foi definido na interface
class MilkyWayPlanet implements Planet {
  name: string;
  mass: number;
  population: number;
  orbitedStar: Star; // Propriedade obrigatória da interface `Planet`

  constructor(name: string, mass: number, population: number, orbitedStar: Star) {
    this.name = name;
    this.mass = mass;
    this.population = population;
    this.orbitedStar = orbitedStar; // Inicialização no construtor
  }

  createSatellite(name: string) {
    // Implementação da função
  }
}

// Aliases também podem usar herança mas com uma
// sintaxe um pouco diferente (e mais estranha)
type Asteroid = CelestialBody & {
  size: number;
};

// A classe `BigAsteroid` implementa o tipo `Asteroid`
class BigAsteroid implements Asteroid {
  name: string;
  mass: number;
  size: number;

  constructor(name: string, mass: number, size: number) {
    this.name = name;
    this.mass = mass;
    this.size = size;
  }
}

// Nota: Remova as declarações duplicadas para `Planet`, `MilkyWayPlanet`, `BigAsteroid`, e `sun`
// e substitua pelo código corrigido acima para evitar conflitos

// Exemplo de uso da classe `MilkyWayPlanet`
let earth: Planet = {
  name: "Terra",
  mass: 5.972 * Math.pow(10, 24),
  population: 8000000000,
  createSatellite: (name: string) => {
    // ...
  },
  orbitedStar: sun // Atribuição do sol como estrela órbita
};

// Remover declarações duplicadas
// var sun = { ... };
// var MilkyWayPlanet = function() { ... };
// var BigAsteroid = function() { ... };
