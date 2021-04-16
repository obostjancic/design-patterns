export interface WeaponBehaviour {
  useWeapon(): void;
}

export class AxeBehaviour implements WeaponBehaviour {
  public useWeapon() {
    console.log('Axe slash');
  }
}

export class KnifeBehaviour implements WeaponBehaviour {
  public useWeapon() {
    console.log('Knife cut');
  }
}

export class BowAndArrowBehaviour implements WeaponBehaviour {
  public useWeapon() {
    console.log('Arrow shot');
  }
}

export class SwordBehaviour implements WeaponBehaviour {
  public useWeapon() {
    console.log('Sword stab');
  }
}
