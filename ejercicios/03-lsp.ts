interface Shape {
  area(): number;
}

class Rectangle implements Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  setWidth(width: number): void {
    this.width = width;
  }

  setHeight(height: number): void {
    this.height = height;
  }

  area(): number {
    return this.width * this.height;
  }
}

class Square implements Shape {
  private side: number;

  constructor(side: number) {
    this.side = side;
  }

  setSide(side: number): void {
    this.side = side;
  }

  area(): number {
    return this.side * this.side;
  }
}

function resizeRectangle(rectangle: Rectangle): void {
  rectangle.setWidth(5);
  rectangle.setHeight(10);
  console.log(`Area esperada: 50. Area obtenida: ${rectangle.area()}`);
}

resizeRectangle(new Rectangle(1, 1));

const cuadrado = new Square(1);
cuadrado.setSide(5);
console.log(`Area del cuadrado: ${cuadrado.area()}`);

// Respuesta:
// - Por que el area final no coincide con lo que espera resizeRectangle?
// Porque Square heredaba de Rectangle pero redefinia setWidth y setHeight para que ambos lados
// cambien juntos. Al llamar setWidth(5) y setHeight(10) sobre un Square, el resultado final
// no es el rectangulo de 5x10 que la funcion espera.
//
// - Es siempre correcto modelar un cuadrado como un rectangulo por herencia?
// No. Un cuadrado no puede sustituir a un rectangulo en cualquier contexto porque no respeta el
// mismo comportamiento al cambiar ancho y alto de forma independiente. Esa herencia rompe LSP.
//
// - Que abstraccion comun podriamos usar?
// Una interfaz simple como Shape, con un metodo area(), que ambas figuras implementan por
// separado sin depender una de la otra.
