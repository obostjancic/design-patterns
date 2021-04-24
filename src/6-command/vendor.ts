export class Light {
  private location: string;

  constructor(location: string) {
    this.location = location;
  }

  public on() {
    console.log(`Turning ${this.location} light on`);
  }

  public off() {
    console.log(`Turning ${this.location} light off`);
  }
}

export class GarageDoor {
  public up() {
    console.log('Raising garage door');
  }

  public down() {
    console.log('Lowering garage door');
  }
  public stop() {
    console.log('Stopping garage door');
  }

  public lightOn() {
    console.log('Turning garage light on');
  }

  public lightOff() {
    console.log('Turning garage light off');
  }
}

export type Channel = 'cd' | 'radio';

export class Stereo {
  private cd: string = '';
  private radioFrequency: string = '';
  private channel: Channel = 'cd';
  private volume: number = 1;

  public setCd(cd: string) {
    this.cd = cd;
    console.log(`Setting cd to ${this.cd}`);
  }

  public setRadioFrequency(frequency: string) {
    this.radioFrequency = frequency;
    console.log(`Setting frequency to ${this.radioFrequency}`);
  }

  public setChannel(channel: Channel) {
    this.channel = channel;
    console.log(`Setting channel to ${this.channel}`);
  }

  public setVolume(volume: number) {
    this.volume = volume;
    console.log(`Setting volume to ${this.volume}`);
  }

  public on() {
    console.log(`Turning stereo on`);
  }

  public off() {
    console.log(`Turning stereo off`);
  }
}

export class CeilingFan {
  public static readonly HIGH: number = 3;
  public static readonly MEDIUM: number = 2;
  public static readonly LOW: number = 1;
  public static readonly OFF: number = 0;

  private location: string;
  private speed: number = CeilingFan.OFF;

  constructor(location: string) {
    this.location = location;
  }

  public getSpeed() {
    return this.speed;
  }

  public high() {
    this.speed = CeilingFan.HIGH;
    console.log(`Setting ${this.location} fan speed to ${this.speed}`);
  }

  public medium() {
    this.speed = CeilingFan.MEDIUM;
    console.log(`Setting ${this.location} fan speed to ${this.speed}`);
  }

  public low() {
    this.speed = CeilingFan.LOW;
    console.log(`Setting ${this.location} fan speed to ${this.speed}`);
  }

  public off() {
    this.speed = CeilingFan.OFF;
    console.log(`Turning ${this.location} fan off`);
  }
}
