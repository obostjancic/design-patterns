export interface Observer {
  update: Function;
}

export interface Observable {
  registerObserver: Function;
  removeObserver: Function;
  notifyObservers: Function;
}
