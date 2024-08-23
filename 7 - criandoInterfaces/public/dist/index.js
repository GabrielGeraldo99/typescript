"use strict";
// Uma Interface é outra maneira de
// declarar um tipo para um objeto,
// portanto funciona de forma semelhante
// Remova a declaração duplicada de `sun` e ajuste o tipo para `Star`
let sun = {
    name: "Sol",
    mass: 1.989 * (Math.pow(10, 30)),
    age: 4.603 * (Math.pow(10, 9)),
    planets: []
};
// Classes podem implementar interfaces
// Nesse caso ela cria o que chamamos de contrato,
// pois obriga a classe a implementar tudo o que
// foi definido na interface
class MilkyWayPlanet {
    constructor(name, mass, population, orbitedStar) {
        this.name = name;
        this.mass = mass;
        this.population = population;
        this.orbitedStar = orbitedStar; // Inicialização no construtor
    }
    createSatellite(name) {
        // Implementação da função
    }
}
// A classe `BigAsteroid` implementa o tipo `Asteroid`
class BigAsteroid {
    constructor(name, mass, size) {
        this.name = name;
        this.mass = mass;
        this.size = size;
    }
}
// Nota: Remova as declarações duplicadas para `Planet`, `MilkyWayPlanet`, `BigAsteroid`, e `sun`
// e substitua pelo código corrigido acima para evitar conflitos
// Exemplo de uso da classe `MilkyWayPlanet`
let earth = {
    name: "Terra",
    mass: 5.972 * Math.pow(10, 24),
    population: 8000000000,
    createSatellite: (name) => {
        // ...
    },
    orbitedStar: sun // Atribuição do sol como estrela órbita
};
// Remover declarações duplicadas
// var sun = { ... };
// var MilkyWayPlanet = function() { ... };
// var BigAsteroid = function() { ... };
