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

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription(); // like calling the person method

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, location) {
    super(name, age);
    this.location = location;
  }

  getDescription() {
    let description = super.getDescription();

    if (this.location) {
      description += ` Is currently visiting ${this.location}.`
    }

    return description;
  }
}

const ramona = new Traveler('Ramona', 23, 'Toronto');
console.log(ramona.getDescription());

const me = new Student();
console.log(me.getDescription());

const boba = new Student('Boba', 33, 'Criminal Justice');
console.log(boba.getDescription());
