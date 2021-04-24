import { AbstractQuackable, Quackable } from '../quackable';
import { Observer } from '../observable/quack.observer';

export class Flock extends AbstractQuackable {
  private quackers: Quackable[] = [];

  public add(quacker: Quackable) {
    this.quackers.push(quacker);
  }

  public register(observer: Observer) {
    this.quackers.forEach((q) => {
      q.register(observer);
    });
  }

  public quack() {
    this.quackers.forEach((q) => {
      q.quack();
    });
  }

  public name() {
    return this.quackers.map((q) => q.name()).join(' ');
  }
}
