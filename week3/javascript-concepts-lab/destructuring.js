//const person = {
   // name: 'Alice',
  //  age: 30,
 //   city: 'New York'
//};

//const {name, age} = person;
//console.log('Name: ', name);
//console.log('Age:', age);

const person = { name: 'Alice', info: { age: 30, occupation: 'Engineer' } };

const { name, info: { age, occupation } } = person;


console.log('Name:', name);
console.log('Age:', age);
console.log('Occupation:', occupation);
