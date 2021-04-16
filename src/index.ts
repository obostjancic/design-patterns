import { driver as strategyDriver } from './1-strategy';
import { driver as observerDriver } from './2-observer/weather';
import { driver as decoratorDriver } from './3-decorator';
import { driver as factoryDriver } from './4-factory';

// Favour composition over inheritance
// Encapsulate what varies
// Program to interfaces, not implementations
// Strive for loosely coubled designs between objects that interact

// strategyDriver();
observerDriver();
// decoratorDriver();
// factoryDriver();
