const person = {
  name: 'Sean',
  lname: 'Fallmann',
  age: 45,
  city: 'Kernersville',
  temp: 48
}

const {name: firstName, lname: lastName = 'unknown', age} = person;
console.log(firstName, lastName, age);


const [street, city, state, zip] = ['1400 Margate Lane', 'Kernersville', 'NC', '27284'];
console.log(street, state, zip)
