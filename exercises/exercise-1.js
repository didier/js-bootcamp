const person = {
  firstName: 'Didier',
  lastName: 'Catz',
  fullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
}

console.log(person.fullName());
