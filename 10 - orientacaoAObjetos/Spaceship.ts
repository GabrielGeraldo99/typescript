class Spaceship {
  private _name: string;
  protected captain: string;
  protected speed: number;

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  constructor(name: string, captain: string) {
    this._name = name;
    this.captain = captain;
    this.speed = 0;
  }

  public accelerate(rate: number, time: number) {
    this.speed = rate * time;
  }

  // Adiciona um método para exibir informações da nave
  public displayInfo() {
    console.log(`Name: ${this._name}, Captain: ${this.captain}, Speed: ${this.speed}`);
  }
}

class Fighter extends Spaceship {
  public weapons: number;

  constructor(name: string, captain: string, weapons: number) {
    super(name, captain);
    this.weapons = weapons;
  }

  public shoot() {
    for (let i = 0; i < this.weapons; i++) {
      console.log('Pew!');
    }
  }

  public erase() {
    this.name = '';
    this.captain = '';
    // Não podemos acessar a propriedade speed diretamente porque é protected
    // Se precisar manipular speed, você pode adicionar um método público para isso
    this.accelerate(0, 0); // Define speed como 0
  }
}

// Instanciação e uso
let ship = new Spaceship('USS Enterprise', 'James T. Kirk');
ship.accelerate(50, 10);
ship.displayInfo();

let fighter = new Fighter('X-Wing', 'Poe Dameron', 4);
fighter.shoot();
fighter.erase();
fighter.displayInfo();
