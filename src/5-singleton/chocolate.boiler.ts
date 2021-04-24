export class ChocolateBoiler {
  private empty: boolean;
  private boiled: boolean;

  private static uniqueBoiler: ChocolateBoiler;

  // Advantages - Lazy initialization
  // Disadvantages - Considered an anti pattern
  // TypeScript namespaces can and should be used instead
  private constructor() {
    this.empty = true;
    this.boiled = false;
  }

  public static getBoiler() {
    if (!this.uniqueBoiler) this.uniqueBoiler = new ChocolateBoiler();
    return this.uniqueBoiler;
  }

  public fill() {
    if (this.empty) {
      this.empty = false;
      this.boiled = false;
    }
  }

  public drain() {
    if (!this.empty && this.boiled) this.empty = true;
  }

  public boil() {
    if (!this.empty && !this.boiled) this.boiled = true;
  }

  public printState() {
    console.log(
      `Boiler is ${this.empty ? 'empty' : 'filled'} and ${
        this.boiled ? 'boiled' : 'not boiled'
      }`
    );
  }
}
