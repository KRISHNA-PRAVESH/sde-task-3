let cargoHold = ['oxyget tanks','space suits','parrot','instruction manual','meal packs','slinky','security blanket'];

//replacing slinky with space tether
cargoHold[cargoHold.indexOf('slinky')] = 'space tether';

//removing last element
console.log(cargoHold.pop());

//removing first element
console.log(cargoHold.shift());

//unshift
cargoHold.unshift(1138)

cargoHold.push('20 meters')

//length of array
let len = cargoHold.length;
console.log(`Final Array: ${cargoHold} , length:${len}`);
