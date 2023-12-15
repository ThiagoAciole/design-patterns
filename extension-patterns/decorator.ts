abstract class Component {
    abstract operation(): void;
  }
  
  class ConcreteComponent extends Component {
    operation(): void {
      console.log("ConcreteComponent operation");
    }
  }
  
  abstract class Decorator extends Component {
    private component: Component;
  
    constructor(component: Component) {
      super();
      this.component = component;
    }
  
    operation(): void {
      this.component.operation();
    }
  }
  
  class ConcreteDecoratorA extends Decorator {
    operation(): void {
      super.operation();
      console.log("ConcreteDecoratorA operation");
    }
  }
  
  class ConcreteDecoratorB extends Decorator {
    operation(): void {
      super.operation();
      console.log("ConcreteDecoratorB operation");
    }
  }
  
  const component = new ConcreteComponent();
  const decoratorA = new ConcreteDecoratorA(component);
  const decoratorB = new ConcreteDecoratorB(decoratorA);
  
  decoratorB.operation();
  