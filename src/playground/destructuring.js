const person = {
  name: 'Julian',
  age: 33,
  location: {
    city: 'Westminster',
    temp: 80,
  },
};

const { name, age } = person;
const { city, temp } = person.location;

// const { city, temp: temperature } = person.location

console.log(`${name} age ${age} lives in ${city} where it is ${temp} degrees.`);
