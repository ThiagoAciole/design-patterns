interface Target {
    request(): void;
  }
  
  class Adaptee {
    specificRequest(): void {
      console.log("Adaptee's specific request");
    }
  }
  
  class Adapter implements Target {
    private adaptee: Adaptee;
  
    constructor(adaptee: Adaptee) {
      this.adaptee = adaptee;
    }
  
    request(): void {
      console.log("Adapter's request");
      this.adaptee.specificRequest();
    }
  }
  
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);
adapter.request();
  