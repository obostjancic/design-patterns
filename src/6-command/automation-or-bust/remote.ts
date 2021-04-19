import { Command, NoCommand } from './commands';

export class RemoteControl {
  private onCommands: Command[] = [];
  private offCommands: Command[] = [];
  private undoCommand: Command;

  constructor() {
    this.onCommands = new Array(7).fill(new NoCommand());
    this.offCommands = new Array(7).fill(new NoCommand());
    this.undoCommand = new NoCommand();
  }

  setCommandSlot(slot: number, onCommand: Command, offCommand: Command) {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  onButtonPressed(slot: number) {
    const selectedCommand = this.onCommands[slot];
    selectedCommand.execute();
    this.undoCommand = selectedCommand;
  }

  offButtonPressed(slot: number) {
    const selectedCommand = this.offCommands[slot];
    selectedCommand.execute();
    this.undoCommand = selectedCommand;
  }

  undoButtonPressed() {
    this.undoCommand.undo();
  }

  print() {
    console.log('Remote control');
    const slots = this.onCommands.map((_, slot) => ({
      Slot: `Slot ${slot}`,
      'On button': this.onCommands[slot].name(),
      'Off button': this.offCommands[slot].name(),
    }));

    console.table(slots);
  }
}
