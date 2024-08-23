// Função que retorna o primeiro elemento de um array
function first<Type>(array: Type[]): Type | undefined {
  return array[0];
}

// Função que retorna o último elemento de um array
function last<Type>(array: Type[]): Type | undefined {
  return array[array.length - 1];
}

const pilots = ['Luke', 'Biggs', 'Wedge', 'Han', 'Lando'];

// Tipo inferido corretamente
const firstPilot = first(pilots);
const lastPilot = last(pilots);

interface Ship {
  name: string;
  pilot: string;
}

interface Fighter extends Ship {
  weapons: number;
  shields: number;
}

interface Transport extends Ship {
  capacity: number;
}

interface Speeder extends Ship {
  speed: number;
  acceleration: number;
}

// Função genérica para clonar uma nave, garantindo que o tipo extendido possua name e pilot
function cloneShip<ShipType extends { name: string; pilot: string }>(
  ship: ShipType,
  newName: string,
  newPilot: string
): ShipType {
  const newShip = { ...ship }; // Cria uma cópia superficial
  newShip.name = newName;
  newShip.pilot = newPilot;
  return newShip;
}

const falcon: Ship = {
  name: 'Millenium Falcon',
  pilot: 'Han',
};

const xWing: Fighter = {
  name: 'Red Five',
  pilot: 'Luke',
  weapons: 4,
  shields: 1,
};

// Tipagem correta após ajustes
const copy1 = cloneShip(falcon, 'Milano', 'Peter');
const copy2 = cloneShip(xWing, 'Black One', 'Poe');

interface EnemyShip {
  name: string;
  pilot: string;
  flag?: string; // Propriedade opcional
}

// O tipo Ship não estaria correto aqui
const enemyCopy = cloneShip(falcon, 'Enemy', 'Enemy');

// Especificando o tipo EnemyShip para a função
const enemyCopy2 = cloneShip<EnemyShip>(falcon, 'Enemy', 'Enemy');

// Propriedade opcional flag pode ser atribuída
enemyCopy2.flag = 'Imperial';

// Classe generica para Piloto
class Pilot<ShipType> {
  name: string;
  ship: ShipType;

  constructor(name: string, ship: ShipType) {
    this.name = name;
    this.ship = ship;
  }
}

// Instâncias de Piloto
const han = new Pilot('Han Solo', falcon);
const luke = new Pilot<Fighter>('Luke Skywalker', xWing);
