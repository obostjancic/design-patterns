import strategy from './1-strategy';
import observer from './2-observer';
import decorator from './3-decorator';
import factory from './4-factory';
import singleton from './5-singleton';
import command from './6-command';
import adapterFacade from './7-adapter-and-facade';
import template from './8-template';
import iteratorComposite from './9-iterator-and-composite';
import state from './10-state';
import compound from './11-compound';

// OO design principles
// ===================================
// Favour composition over inheritance
// Encapsulate what varies
// Program to interfaces, not implementations
// Strive for loosely coubled designs between objects that interact
// Depend on abstractions. Do not deppend on concrete classes
// Talk only to your friends.
// Don't call us, we'll call you
// A class shuld have only one reason to change

strategy();
observer();
decorator();
factory();
singleton();
command();
adapterFacade();
template();
iteratorComposite();
state();
compound();
