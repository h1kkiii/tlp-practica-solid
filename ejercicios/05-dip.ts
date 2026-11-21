interface Notifier {
  send(to: string, message: string): void;
}

class EmailSender implements Notifier {
  send(to: string, message: string): void {
    console.log(`Correo para ${to}: ${message}`);
  }
}

class SmsSender implements Notifier {
  send(to: string, message: string): void {
    console.log(`SMS para ${to}: ${message}`);
  }
}

class OrderService {
  private notifier: Notifier;

  constructor(notifier: Notifier) {
    this.notifier = notifier;
  }

  createOrder(customerEmail: string): void {
    console.log("Pedido creado");
    this.notifier.send(customerEmail, "Tu pedido fue creado");
  }
}

new OrderService(new EmailSender()).createOrder("ana@example.com");
new OrderService(new SmsSender()).createOrder("ana@example.com");

// Respuesta:
// - Que dependencia concreta crea OrderService?
// Creaba directamente un EmailSender dentro de createOrder, quedando atado a esa implementacion
// concreta.
//
// - Como probarias la clase sin enviar un correo?
// Pasandole por el constructor un Notifier de prueba que solo registre el mensaje en lugar de
// enviarlo de verdad, sin tocar el codigo de OrderService.
//
// - Que contrato comun podrian implementar el correo y el SMS?
// La interfaz Notifier, con un metodo send(to, message), que ambas formas de aviso cumplen cada
// una con su propia implementacion.
