import { Component } from 'react';

import { DataForCreateCharts } from '@/pages/Timeline/ChartCurrency';

class Observer {
  data: DataForCreateCharts | null;

  observers: Component[];

  constructor() {
    this.data = null;
    this.observers = [];
  }

  setData(data:DataForCreateCharts) {
    this.data = data;
    this.notify();
  }

  subscribe(observer:Component) {
    this.observers.push(observer);
  }

  unsubscribe(observer:Component) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify() {
    this.observers.forEach((observer) => {
      observer.update(this);
    });
  }
}

export const observer = new Observer();
