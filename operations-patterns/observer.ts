abstract class Subject {
  private observers: Observer[] = [];

  attach(observer: Observer): void {
    this.observers.push(observer);
  }

  detach(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(inputData: any): void {
    this.observers.forEach((observer) => observer.update(inputData));
  }
}

class ConcreteSubject extends Subject {
  private state: number[] = [];

  getState(): number[] {
    return this.state;
  }

  setState(numbers: number[]): void {
    this.state = numbers;
    this.notify(numbers);
  }
}

interface Observer {
  update(inputData: any): void;
}

class ConcreteObserver implements Observer {
  update(inputData: any): void {
    for (const number of inputData) {
      if (number % 2 === 0) {
        console.log(`Número par encontrado: ${number}`);
      }
    }
  }
}

const subject = new ConcreteSubject();
const observer1 = new ConcreteObserver();

subject.attach(observer1);


const numbersArray = Array.from({ length: 10 }, (_, i) => i + 1);
subject.setState(numbersArray);
