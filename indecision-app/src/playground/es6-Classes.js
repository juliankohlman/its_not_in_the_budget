// Person class
class Person {
  constructor(name = 'Default Name', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hello ${this.name}.`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
}

const me = new Person();
console.log(me.getDescription());

const boba = new Person('Boba', 33);
console.log(boba.getDescription());
