export interface Duck {
  fly(): void;
  quack(): void;
}

export class MallardDuck implements Duck {
  public fly() {
    console.log('flying');
  }

  public quack() {
    console.log('quack');
  }
}
