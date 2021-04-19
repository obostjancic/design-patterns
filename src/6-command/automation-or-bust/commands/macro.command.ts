import { Command } from '.';

export class MacroCommand implements Command {
  private commands: Command[] = [];

  constructor(commands: Command[]) {
    this.commands = commands;
  }

  public execute() {
    this.commands.reverse().forEach((cmd) => {
      cmd.execute();
    });
  }

  public undo() {
    this.commands.forEach((cmd) => {
      cmd.undo();
    });
  }

  public name() {
    return `Macro ${this.commands.map((cmd) => cmd.name()).join(', ')}`;
  }
}
