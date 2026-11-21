interface Printer {
  print(document: string): void;
}

interface Scanner {
  scan(document: string): void;
}

interface Fax {
  fax(document: string): void;
}

class SimplePrinter implements Printer {
  print(document: string): void {
    console.log(`Imprimiendo: ${document}`);
  }
}

class MultifunctionPrinter implements Printer, Scanner, Fax {
  print(document: string): void {
    console.log(`Imprimiendo: ${document}`);
  }

  scan(document: string): void {
    console.log(`Escaneando: ${document}`);
  }

  fax(document: string): void {
    console.log(`Enviando fax: ${document}`);
  }
}

new SimplePrinter().print("tarea.txt");
new MultifunctionPrinter().scan("tarea.txt");

// Respuesta:
// - Que metodo no necesita SimplePrinter?
// No necesita scan ni fax, ya que solo puede imprimir documentos.
//
// - Que problema causa implementar metodos que lanzan errores?
// Obliga a una clase a tener metodos que no puede cumplir, y si alguien los llama el programa
// falla en tiempo de ejecucion en lugar de evitarse ese error desde el diseño.
//
// - Como separar las capacidades de una impresora?
// Con interfaces chicas y especificas, Printer, Scanner y Fax, de modo que cada clase implemente
// solo las capacidades que realmente tiene.
