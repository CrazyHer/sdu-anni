import { action, makeAutoObservable } from "mobx";

export default class Counter {
  counter = 0;

  constructor() {
    makeAutoObservable(this);
  }

  @action counterStore() {
    this.counter++;
  }

  @action increment() {
    this.counter++;
  }

  @action decrement() {
    this.counter--;
  }

  @action incrementAsync() {
    setTimeout(() => {
      this.increment();
    }, 1000);
  }
}
