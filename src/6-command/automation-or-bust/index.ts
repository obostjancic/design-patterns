import {
  CeilingFanHighCommand,
  CeilingFanOffCommand,
  GarageDoorCloseCommand,
  GarageDoorOpenCommand,
  LightOffCommand,
  LightOnCommand,
  StereoChangeToCdCommand,
  StereoChangeToRadioCommand,
  StereoOffCommand,
  StereoOnWithCdCommand,
} from './commands';
import { MacroCommand } from './commands/macro.command';
import { RemoteControl } from './remote';
import { CeilingFan, GarageDoor, Light, Stereo } from './vendor';

const separator = () => console.log('==========================');

// Command pattern encapsulates a request as an object, thereby letting
// parametrize clients with different requests, queue or log requests, and
// support undoable operations.
export default () => {
  const remote: RemoteControl = new RemoteControl();

  const kitchenlight = new Light('kitchen');
  const kitchenLightOn = new LightOnCommand(kitchenlight);
  const kitchenLightOff = new LightOffCommand(kitchenlight);
  remote.setCommandSlot(0, kitchenLightOn, kitchenLightOff);

  const garageDoor = new GarageDoor();
  const garageDoorOpen = new GarageDoorOpenCommand(garageDoor);
  const garageDoorClose = new GarageDoorCloseCommand(garageDoor);
  remote.setCommandSlot(2, garageDoorOpen, garageDoorClose);

  const stereo = new Stereo();

  const stereoOn = new StereoOnWithCdCommand(stereo);
  const stereoOff = new StereoOffCommand(stereo);
  remote.setCommandSlot(3, stereoOn, stereoOff);

  const stereoChangeToRadio = new StereoChangeToRadioCommand(stereo);
  const stereoChangeToCd = new StereoChangeToCdCommand(stereo);
  remote.setCommandSlot(4, stereoChangeToRadio, stereoChangeToCd);

  const fan = new CeilingFan('kitchen');
  const fanOff = new CeilingFanOffCommand(fan);
  const fanHigh = new CeilingFanHighCommand(fan);
  remote.setCommandSlot(5, fanHigh, fanOff);

  const partyOn = new MacroCommand([
    kitchenLightOn,
    garageDoorOpen,
    stereoOn,
    fanHigh,
  ]);
  const partyOff = new MacroCommand([
    kitchenLightOff,
    garageDoorClose,
    stereoOff,
    fanOff,
  ]);
  remote.setCommandSlot(6, partyOn, partyOff);

  remote.print();

  remote.onButtonPressed(0);
  remote.undoButtonPressed();

  separator();

  remote.onButtonPressed(2);
  remote.offButtonPressed(2);

  separator();

  remote.onButtonPressed(3);
  remote.onButtonPressed(4);
  remote.offButtonPressed(4);
  remote.offButtonPressed(3);

  separator();

  remote.onButtonPressed(5);
  remote.onButtonPressed(6);
  remote.undoButtonPressed();
  remote.offButtonPressed(5);

  separator();

  remote.onButtonPressed(6);
  remote.undoButtonPressed();
};
