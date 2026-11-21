interface User {
  username: string;
  email: string;
}

class UserValidator {
  validate(email: string): void {
    if (!email.includes("@")) {
      throw new Error("El correo no es valido");
    }
  }
}

class UserRepository {
  private users: User[] = [];

  save(user: User): void {
    this.users.push(user);
  }
}

class EmailService {
  sendWelcomeEmail(email: string): string {
    return `Email enviado a ${email}`;
  }
}

class UserRegistrationService {
  private validator: UserValidator;
  private repository: UserRepository;
  private emailService: EmailService;

  constructor(validator: UserValidator, repository: UserRepository, emailService: EmailService) {
    this.validator = validator;
    this.repository = repository;
    this.emailService = emailService;
  }

  register(username: string, email: string): string {
    this.validator.validate(email);
    this.repository.save({ username, email });
    return this.emailService.sendWelcomeEmail(email);
  }
}

const servicioRegistro = new UserRegistrationService(
  new UserValidator(),
  new UserRepository(),
  new EmailService()
);
console.log(servicioRegistro.register("ana", "ana@example.com"));

// Respuesta:
// - Que responsabilidades tiene UserManager?
// Tenia cuatro responsabilidades mezcladas: validar el correo, guardar el usuario en una lista
// y enviar un correo de bienvenida. Cada una cambia por motivos distintos.
//
// - Que ocurre si cambia la forma de guardar datos?
// Con el diseño original habria que tocar UserManager. Ahora solo se modifica UserRepository,
// sin afectar la validacion ni el envio de correos.
//
// - Que clase podria encargarse de enviar correos?
// EmailService, que se dedica unicamente a armar y enviar el mensaje de bienvenida.
