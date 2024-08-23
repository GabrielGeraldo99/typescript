"use strict";
// index.ts
// Declarando os tipos
// Funções Principais
const planets = [];
function addPlanet(name, coordinates, situation) {
    planets.push({
        name,
        coordinates,
        situation,
        satellites: []
    });
    alert(`O planeta ${name} foi salvo com sucesso.`);
}
function findPlanet(name) {
    const planet = planets.find(planet => planet.name === name);
    return planet !== null && planet !== void 0 ? planet : false;
}
function updateSituation(situation, planet) {
    planet.situation = situation;
    alert(`A situação do planeta ${planet.name} foi atualizada para "${situation}".`);
}
function addSatellite(name, planet) {
    planet.satellites.push(name);
    alert(`O satélite ${name} foi adicionado ao planeta ${planet.name}.`);
}
function removeSatellite(name, planet) {
    planet.satellites = planet.satellites.filter(satellite => satellite !== name);
    alert(`O satélite ${name} foi removido do planeta ${planet.name}.`);
}
// Funções Auxiliares
function promptValidSituation() {
    var _a;
    let situation = 'Habitado'; // Valor padrão para evitar erro
    let validSituation = false;
    while (!validSituation) {
        const situationInput = (_a = prompt('Informe a situação do planeta?\n1 - Habitado\n2 - Habitável\n3 - Inabitável\n4 - Inexplorado')) !== null && _a !== void 0 ? _a : '';
        switch (situationInput) {
            case '1':
                situation = 'Habitado';
                validSituation = true;
                break;
            case '2':
                situation = 'Habitável';
                validSituation = true;
                break;
            case '3':
                situation = 'Inabitável';
                validSituation = true;
                break;
            case '4':
                situation = 'Inexplorado';
                validSituation = true;
                break;
            default:
                alert('Situação inválida!');
                break;
        }
    }
    return situation;
}
function promptValidPlanet(callback) {
    var _a;
    const planetName = (_a = prompt('Informe o nome do planeta:')) !== null && _a !== void 0 ? _a : '';
    if (planetName) {
        const planet = findPlanet(planetName);
        if (planet !== false) {
            callback(planet);
        }
        else {
            alert('Planeta não encontrado! Retornando ao menu...');
        }
    }
    else {
        alert('Nome do planeta não informado!');
    }
}
// Opções do Menu
function firstMenuOption() {
    var _a, _b, _c, _d, _e;
    const name = (_a = prompt('Informe o nome do planeta:')) !== null && _a !== void 0 ? _a : '';
    const coordinateA = Number((_b = prompt('Informe a primeira coordenada:')) !== null && _b !== void 0 ? _b : '0');
    const coordinateB = Number((_c = prompt('Informe a segunda coordenada:')) !== null && _c !== void 0 ? _c : '0');
    const coordinateC = Number((_d = prompt('Informe a terceira coordenada:')) !== null && _d !== void 0 ? _d : '0');
    const coordinateD = Number((_e = prompt('Informe a quarta coordenada:')) !== null && _e !== void 0 ? _e : '0');
    const situation = promptValidSituation();
    const confirmation = confirm(`Confirma o registro do planeta ${name}?
  Coordenadas: (${coordinateA}, ${coordinateB}, ${coordinateC}, ${coordinateD})
  Situação: ${situation}`);
    if (confirmation) {
        addPlanet(name, [coordinateA, coordinateB, coordinateC, coordinateD], situation);
    }
}
function secondMenuOption() {
    promptValidPlanet(planet => {
        const situation = promptValidSituation();
        updateSituation(situation, planet);
    });
}
function thirdMenuOption() {
    promptValidPlanet(planet => {
        var _a;
        const satellite = (_a = prompt('Informe o nome do satélite a ser adicionado:')) !== null && _a !== void 0 ? _a : '';
        if (satellite) {
            addSatellite(satellite, planet);
        }
        else {
            alert('Nome do satélite não informado!');
        }
    });
}
function fourthMenuOption() {
    promptValidPlanet(planet => {
        var _a;
        const satellite = (_a = prompt('Informe o nome do satélite a ser removido:')) !== null && _a !== void 0 ? _a : '';
        if (satellite) {
            removeSatellite(satellite, planet);
        }
        else {
            alert('Nome do satélite não informado!');
        }
    });
}
function fifthMenuOption() {
    let list = 'Planetas:\n';
    planets.forEach(planet => {
        const [a, b, c, d] = planet.coordinates;
        list += `
      Nome: ${planet.name}
      Coordenadas: (${a}, ${b}, ${c}, ${d})
      Situação: ${planet.situation}
      Satélites: ${planet.satellites.length}
    `;
        planet.satellites.forEach(satellite => {
            list += `    - ${satellite}\n`;
        });
    });
    alert(list);
}
// Menu
let userOption = 0;
while (userOption !== 6) {
    const menu = `Menu
    1 - Registrar um novo planeta
    2 - Atualizar situação do planeta
    3 - Adicionar um satélite ao planeta
    4 - Remover um satélite do planeta
    5 - Lista todos os planetas
    6 - Sair
  `;
    const input = prompt(menu);
    userOption = input ? Number(input) : 0;
    switch (userOption) {
        case 1:
            firstMenuOption();
            break;
        case 2:
            secondMenuOption();
            break;
        case 3:
            thirdMenuOption();
            break;
        case 4:
            fourthMenuOption();
            break;
        case 5:
            fifthMenuOption();
            break;
        case 6:
            alert('Saindo...');
            break;
        default:
            alert('Opção inválida!');
            break;
    }
}
