
class Person {
  constructor(name = 'Anonymous', age = 'Unknown') {
    this.name = name;
    this.age = age;
  }

  getAge() {
    return this.age
  }

  getName() {
    return this.name;
  }

  getDescription() {
    return `Name: ${this.getName()}  Age: ${this.getAge()}`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  getMajor() {
    return this.major;
  }

  getDescription() {
    return `${super.getDescription()} Major: ${this.getMajor()}`;
  }
}

const Jessica = new Student('Jessica', 13, 'Cooking');
console.log(Jessica.getDescription())