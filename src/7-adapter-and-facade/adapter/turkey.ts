export interface Turkey {
  fly(): void;
  gobble(): void;
}

export class WildTurkey implements Turkey {
  public fly() {
    console.log('flapping');
  }

  public gobble() {
    console.log('gobble gobble');
  }
}
