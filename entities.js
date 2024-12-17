/**
  Entidade fraca - Person
*/
export class Person {
  name = ""
  lastname = ""
  years = 0
  birthday = ""
  phone = ""
  CPF = 0

  constructor({ name, lastname, years, birthday, phone, CPF }) {
    this.name = name
    this.lastname = lastname
    this.years = years
    this.birthday = birthday
    this.phone = phone
    this.CPF = CPF
  }
}


/**
  Entidade Usuário
*/
export class User extends Person {
  email = ""

  constructor({ email, ...remaning }) {
    super(remaning);
    this.email = email;
  }
}


/**
  A entidade Admin destina-se a usuários
  de teste e administradores da aplicação.
*/
export class Admin extends User {
  // Métodos e atributos especiais para administradores

  constructor({ ...attr }) {
    super(attr);
  }
}

/**
  Método adiconado ao protótipo da classe
  para reduzir o uso de memória.
*/
Admin.prototype.getControls = () => {
  console.log("Acesso aos controles de administradores liberados!");
}


/**
  Usuários Premium acessa conteúdo do qual
  o usuário comum não tem acesso.
*/
export class PremiumUser extends User {
  plan = ""

  constructor({ plan, ...attr }) {
    super(attr);
    this.plan = plan;
  }
}