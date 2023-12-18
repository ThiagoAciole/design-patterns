// Interface alvo
interface Target {
  request(): void;
}

// Classe Adaptee
class Adaptee {
  specificRequest(): void {
    console.log("Adaptee's specific request");
  }
}

// Classe Adapter
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

// Adaptador para converter número float para inteiro
class FloatToIntAdapter implements Target {
  private floatNumber: number;

  constructor(floatNumber: number) {
    this.floatNumber = floatNumber;
  }

  request(): void {
    const intNumber = Math.floor(this.floatNumber);
    console.log(`Converted float to int: ${intNumber}`);
  }
}

// Uso do Adaptee e Adapter
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);
adapter.request();

// Uso do FloatToIntAdapter
const floatNumber = 7.5;
const floatToIntAdapter = new FloatToIntAdapter(floatNumber);
floatToIntAdapter.request();
