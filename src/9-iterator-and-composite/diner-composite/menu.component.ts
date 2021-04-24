import { Iterator } from './iterator';

export abstract class MenuComponent {
  public add(_: MenuComponent): void {
    throw new Error('Unsupported operation');
  }

  public remove(_: MenuComponent): void {
    throw new Error('Unsupported operation');
  }

  public getChild(_: number): MenuComponent {
    throw new Error('Unsupported operation');
  }

  public getName(): string {
    throw new Error('Unsupported operation');
  }

  public getDescription(): string {
    throw new Error('Unsupported operation');
  }

  public getPrice(): number {
    throw new Error('Unsupported operation');
  }

  public isVegetarian(): boolean {
    throw new Error('Unsupported operation');
  }

  public print(): void {
    throw new Error('Unsupported operation');
  }

  public createIterator(): Iterator<MenuComponent> {
    throw new Error('Unsupported operation');
  }
}
