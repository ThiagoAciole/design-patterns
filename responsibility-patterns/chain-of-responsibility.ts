abstract class Handler {
    private successor: Handler | null = null;
  
    setSuccessor(handler: Handler): void {
      this.successor = handler;
    }
  
    abstract handleRequest(): void;
  
    passRequest(): void {
      if (this.successor) {
        this.successor.handleRequest();
      }
    }
  }
  
  class ConcreteHandler1 extends Handler {
    handleRequest(): void {
      console.log("ConcreteHandler1 is handling the request.");
      this.passRequest();
    }
  }
  
  class ConcreteHandler2 extends Handler {
    handleRequest(): void {
      console.log("ConcreteHandler2 is handling the request.");
      this.passRequest();
    }
  }

  const handler1 = new ConcreteHandler1();
  const handler2 = new ConcreteHandler2();
  handler1.setSuccessor(handler2);
  handler1.handleRequest();
  