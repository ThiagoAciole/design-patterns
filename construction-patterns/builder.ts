class Product {
  private parts: string[] = [];

  addPart(part: string): void {
    this.parts.push(part);
  }

  show(): void {
    console.log(`Product parts: ${this.parts.join(", ")}`);
  }
}

abstract class Builder {
  abstract buildPart1(): void;
  abstract buildPart2(): void;
  abstract getResult(): Product;
}

class ConcreteBuilder extends Builder {
  private product: Product = new Product();

  buildPart1(): void {
    this.product.addPart("Part1");
  }

  buildPart2(): void {
    this.product.addPart("Part2");
  }

  getResult(): Product {
    return this.product;
  }
}

class Director {
  private builder: Builder;

  constructor(builder: Builder) {
    this.builder = builder;
  }

  construct(): Product {
    this.builder.buildPart1();
    this.builder.buildPart2();
    return this.builder.getResult();
  }
}

const builder = new ConcreteBuilder();
const director = new Director(builder);
const product = director.construct();
product.show();
