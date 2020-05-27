// Задача 1
class Weapon {
    constructor(obj) {
      this.name = obj.name;
      this.attack = obj.attack;
      this.durability = obj.durability;
      this._durability = obj.durability;
      this.range = obj.range;  
    }

    takeDamage(damage) {
        if ((this.durability - damage) > 0) {
          this.durability = this.durability - damage;
        } else {
          this.durability = 0;
        }
    }

    getDamage() {
      if (this.durability === 0) {
        return 0;
      } else if ((this.durability - damage) >= this._durability * 0.3) {
        return this.attack;
      } else {
        return this.attack / 2;
      }
    }

    isBroken() {
      if (this.durability > 0) {
        return false;
      } 
        return true;
      }
}

const arm = new Weapon ({
  name: 'Рука',
  attack: 1,
  durability: Infinity,
  range: 1
});

const bow = new Weapon ({
  name: 'Лук',
  attack: 10,
  durability: 200,
  range: 3
});

const sword = new Weapon ({
  name: 'Меч',
  attack: 25,
  durability: 500,
  range: 1
});

const knife = new Weapon ({
  name: 'Нож',
  attack: 5,
  durability: 300,
  range: 1
});

const staff = new Weapon ({
  name: 'Посох',
  attack: 8,
  durability: 300,
  range: 2
});

const longBow = new Weapon ({
  name: 'Длинный лук',
  attack: 15,
  durability: 200,
  range: 4 
});

const axe = new Weapon({
  name: 'Секира',
  attack: 27,
  durability: 800,
  range: 1,
});

const stormStaff = new Weapon({
  name: 'Посох Бури',
  attack: 10,
  durability: 300,
  range: 3,
});

// Задача 2

class Arm extends Weapon {
  constructor() {
    super({name: 'Рука', attack: 1, durability: Infinity, range: 1});
  }
}

class Bow extends Weapon {
  constructor() {
    super({name: 'Лук', attack: 10, durability: 200, range: 3});
  }
}

class Sword extends Weapon {
  constructor() {
    super({name: 'Меч', attack: 25, durability: 500, range: 1});
  }
} 

class Knife extends Weapon {
  constructor() {
    super({name: 'Нож', attack: 5, durability: 300, range: 1});
  }
}

class Staff extends Weapon {
  constructor() {
    super({name: 'Посох', attack: 8, durability: 300, range: 2});
  }
}

class LongBow extends Bow {
  constructor(name, attack, range) {
    super();
    this.name = 'Длинный лук';
    this.attack = 15;
    this.range = 4;
  }
}

class Axe extends Sword {
  constructor(name, attack, durability) {
    super();
    this.name = 'Секира';
    this.attack = 27;
    this.durability = 800;
  }
}

class StormStaff extends Staff {
  constructor(name, attack, range) {
    super();
    this.name = 'Посох Бури';
    this.attack = 10;
    this.range = 3;
  }
}

// Задача 3
class StudentLog {
  constructor(name) {
    this.name = name;
    this.data = {};
  }

  getName() {
    return this.mame;
  }
  
  addGrade(grade, subject) {
    if (!(subject in this data)) {
      this.data[subject] = [];
    }
    if ( (typeof grade !== 'number') || grade < 1 || grade > 5) {
      console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5`);
  } else {
      this.data[subject].push(grade); 
  } 
  return this.data[subject].length;   
  }

  getAverageBySubject(subject) {
    if (subject in this.data === undefined) {
      return 0;
  }
  let sum = 0;
  let arrLength = this.data[subject].length;
  for(let i = 0; i < arrLength; i++) {
      sum += this.data[subject][i];
  }
  return sum / arrLength;
  }

  getTotalAverage() {
    let objLength = Object.keys(this.data).length;

        if (objLength === 0) {
            return 0;
        }

        let sum = 0;

        for(let item in this.data) {
            sum += this.getAverageBySubject(item);
        }        

        return sum / objLength;
  }
}


