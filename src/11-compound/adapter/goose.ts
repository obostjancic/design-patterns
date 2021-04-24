import { AbstractQuackable } from '../quackable';

export class Goose {
  public honk() {
    console.log('Goose Honks');
  }
}

export class GooseAdapter extends AbstractQuackable {
  private goose: Goose;

  constructor(goose: Goose) {
    super();
    this.goose = goose;
  }

  public quack() {
    this.goose.honk();
  }

  public name() {
    return 'Goose';
  }
}
