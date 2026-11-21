interface PaymentMethod {
  pay(amount: number): void;
}

class CardPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Pagando $${amount} con tarjeta`);
  }
}

class CashPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Pagando $${amount} en efectivo`);
  }
}

class TransferPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Pagando $${amount} con transferencia`);
  }
}

class PaymentProcessor {
  pay(metodo: PaymentMethod, amount: number): void {
    metodo.pay(amount);
  }
}

new PaymentProcessor().pay(new CardPayment(), 100);

// Respuesta:
// - Que parte debe modificarse para agregar pago con transferencia?
// Con el diseño original habria que agregar un nuevo case dentro de PaymentProcessor. Ahora
// solo se crea una clase nueva (TransferPayment) y PaymentProcessor no se toca.
//
// - Como podriamos representar un medio de pago?
// Con una interfaz comun, PaymentMethod, que define el metodo pay. Cada medio de pago es una
// clase que implementa esa interfaz.
//
// - Que comportamiento comun tienen todos los medios de pago?
// Todos saben procesar un pago de un monto determinado, es decir, todos cumplen el metodo
// pay(amount) definido en PaymentMethod.
