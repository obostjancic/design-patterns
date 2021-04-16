export interface QuackBehaviour {
  quack(): void;
}

export class Quack implements QuackBehaviour {
  public quack() {
    console.log('quacking');
  }
}

export class Squeak implements QuackBehaviour {
  public quack() {
    console.log('squeaking');
  }
}

export class MuteQuack implements QuackBehaviour {
  public quack() {
    console.log('<<< silence >>>');
  }
}
