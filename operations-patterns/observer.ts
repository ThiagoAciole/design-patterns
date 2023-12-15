abstract class Subject {
    private observers: Observer[] = [];
  
    attach(observer: Observer): void {
      this.observers.push(observer);
    }
  
    detach(observer: Observer): void {
      this.observers = this.observers.filter((obs) => obs !== observer);
    }
  
    notify(): void {
      this.observers.forEach((observer) => observer.update());
    }
  }
  
  class ConcreteSubject extends Subject {
    private state: string = "";
  
    getState(): string {
      return this.state;
    }
  
    setState(state: string): void {
      this.state = state;
      this.notify();
    }
  }
  
  interface Observer {
    update(): void;
  }
  
  class ConcreteObserver implements Observer {
    update(): void {
      console.log("ConcreteObserver has been notified.");
    }
  }
  
  const subject = new ConcreteSubject();
  const observer1 = new ConcreteObserver();
  const observer2 = new ConcreteObserver();
  
  subject.attach(observer1);
  subject.attach(observer2);
  
  subject.setState("New State");
  