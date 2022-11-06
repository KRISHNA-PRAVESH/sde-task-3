let holdCabinet1 = ['duct tape','gum',3.14,false,6.022e3];

let holdCabinet2 = ['orange drink','nerf toys','camera',42,'parsnip'];

//concatenating both arrays
let combined = holdCabinet1.concat(holdCabinet2);
console.log(combined);
console.log(holdCabinet1);

//slicing
console.log(holdCabinet1.slice(1,3));
console.log(holdCabinet2.slice(2,5));

//reversing the first array
holdCabinet1.reverse();

//sorting the second array
holdCabinet2.sort();

//checking if the orginal arrays changed
console.log(holdCabinet1);
console.log(holdCabinet2);


//observation: sort and reverse methods changed the original array while slice and concat didn't.
