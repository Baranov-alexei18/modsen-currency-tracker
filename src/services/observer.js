class Observer {
  constructor() {
    this.data = null;
    this.observers = [];
  }

  setData(data) {
    this.data = data;
    this.notify();
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify() {
    this.observers.forEach((observer) => {
      observer.update(this);
    });
  }
}

export const observer = new Observer();
