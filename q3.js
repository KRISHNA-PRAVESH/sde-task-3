
//adding using splice
cargoHold.splice(3,0,'keys');
console.log(cargoHold);

//removing using splice
let index = cargoHold.indexOf('instruction manual');

cargoHold.splice(index,1);
console.log(cargoHold);

//replacing elements in indices 2-4
cargoHold.splice(2,3,'cat','fob','string cheese');
console.log(cargoHold);
