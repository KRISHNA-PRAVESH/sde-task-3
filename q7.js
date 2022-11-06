// let people = ['Greg','Mary','Devon','James'];

//1. Printing all persons
for(person of people){
  console.log(person);
}

//2. Removing Greg
const indexOfGreg = people.indexOf("Greg");
people.splice(indexOfGreg,0);

//3. Removing James
const indexOfJames = people.indexOf("James");
people.splice(indexOfJames,0);

//4. Adding matt to the front
let newPerson = "Matt";
people.unshift(newPerson);

//5. Adding me
let me = "Krishna";
people.push(me);

//6.
for(person of people){
  console.log(person);
  if(person==="Mary") break;
}

//7. Creating copy
const len = people.length;
let copyOfPeople = people.slice(2,len+1);

//8. Index of mary
const indexOfMary = people.indexOf("Mary");
console.log(indexOfMary);

//9. index of non existing element
const indexOfFoo= people.indexOf("Foo");
console.log(indexOfFoo);

//10. 
let people1 = ['Greg','Mary','Devon','James'];
people1.splice(2,2,"Elizabeth","Artie");

//11. concataneting bob
const withBob = people1.concat("Bob");
console.log(people1);



