import {
  WeaponBehaviour,
  KnifeBehaviour,
  BowAndArrowBehaviour,
  AxeBehaviour,
  SwordBehaviour,
} from './weapon.behaviour';

export class Character {
  private weapon: WeaponBehaviour;

  constructor(weapon: WeaponBehaviour) {
    this.weapon = weapon;
  }

  public setWeapon(weapon: WeaponBehaviour) {
    this.weapon = weapon;
  }
  public fight() {
    this.weapon.useWeapon();
  }
}

export class King extends Character {
  constructor() {
    super(new AxeBehaviour());
    console.log('King');
  }
}

export class Queen extends Character {
  constructor() {
    super(new BowAndArrowBehaviour());
    console.log('Queen');
  }
}

export class Knight extends Character {
  constructor() {
    super(new SwordBehaviour());
    console.log('Knight');
  }
}

export class Troll extends Character {
  constructor() {
    super(new KnifeBehaviour());
    console.log('Troll');
  }
}
