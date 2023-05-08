class User {
constructor (_firstName, _lastName, _age, _location ) {
this.fristName = _firstName;
this.lastName = _lastName;
this.age = _age;
this.location = _location;
}

piuVecchio = (user) => {
return this.age > user.age ? `${this.fristName} è più vecchio di ${user.fristName}` : `${this.fristName} è più giovane di ${user.fristName}`;
}

}

const Persona = new User ('Antonio', 'Russo', 28, 'Roma');
const Persona2 = new User ('Luca', 'Rossi', 50, 'Napoli');

console.log (Persona.piuVecchio(Persona2));