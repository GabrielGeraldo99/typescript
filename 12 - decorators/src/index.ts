function Decorator() {
  return function (target: Object, key: string | symbol, descriptor: PropertyDescriptor) {
    console.log('Chamando Decorator');
  }
}

class Planet {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  @Decorator()
  calculate(value: number) {
    console.log(`Calculando ${value} * 2`);
    return value * 2;
  }
}

const planet = new Planet('Terra');
const result = planet.calculate(5);
console.log(`Resultado: ${result}`);
