


class Warrior {

    constructor (life, power) {
      this.life = life;
      this.power = power;
  
    }
  
    attack = () => {
  
      console.log(`Ha hecho ${this.power} de daño`)
  
    }

    defend = (damage) => {

        let totallife = this.life - damage;
  
        console.log(`Me queda ${totallife} de vida`)
    
      }
  
  }


  class Maya extends Warrior {

    constructor (life, power, name, age, weight) {
      super(life,power);
      this.name = name;
      this.age = age;
      this.weight = weight;
  
    }
  
    drinkColaCao = () => {
  
      this.power = this.power + 10;
      console.log(`Mi poder ahora es de ${this.power}`);
  
    }
  
  }


  class Aztec extends Warrior {

    constructor (life, power, name, age, weight) {
      super(life,power);
      this.name = name;
      this.age = age;
      this.weight = weight;
  
    }
  
    drinkNesquik = () => {
  
      this.life = this.life + 10;
      console.log(`Mi vida ahora vale ${this.life}`);
  
    }
  
  }

  const Maya1 = new Maya (100, 30, 'Ketzal', 18, '80kg');
  const Aztec1 = new Aztec (120, 15, 'Ketzal', 17, '78kg');
  
  Maya1.drinkColaCao();
  Aztec1.attack();
  Maya1.defend(30);


  Aztec1.drinkNesquik();
  Maya1.attack();
  Aztec1.defend(30);





