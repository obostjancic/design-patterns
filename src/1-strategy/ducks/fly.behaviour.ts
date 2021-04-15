// Strategy pattern - defines a family of interchangeable algorithms
export interface FlyBehaviour {
  fly: Function;
}

export class FlyWithWings implements FlyBehaviour {
  public fly() {
    console.log("flapping wings");
  }
}

export class FlyNoWay implements FlyBehaviour {
  public fly() {
    console.log("<<< can't fly >>>");
  }
}

export class FlyRocketPowered implements FlyBehaviour {
  public fly() {
    console.log("flying with a rocket");
  }
}
