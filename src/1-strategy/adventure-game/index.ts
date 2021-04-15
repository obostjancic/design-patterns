import { Character, King, Queen, Troll, Knight } from "./character";
import { AxeBehaviour } from "./weapon.behaviour";

const separator = () => console.log("==========================");

export const driver = () => {
  separator();
  console.log("Adventure game");
  separator();

  const king: Character = new King();
  king.fight();

  separator();

  const queen: Character = new Queen();
  queen.fight();

  separator();

  const troll: Character = new Troll();
  troll.fight();

  separator();

  const knight: Character = new Knight();
  knight.fight();
  knight.setWeapon(new AxeBehaviour());
  knight.fight();

  separator();
};
