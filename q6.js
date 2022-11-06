const element1  = ['hydrogen','H',1.008];
const element2 = ['helium','He',4.003];
const element26 = ['iron','Fe',55.85];

//adding arrays to the array-table
const table = [];
table.push(element1,element2,element26);

console.log(table);

console.log(table[1]) //prints the second array

console.log(table[1][1]) //prints the second element in the second array

//mass of element1
console.log(`Mass of element1: ${table[0][2]}`);

//Name of element2
console.log(`Name of element2: ${table[1][0]}`);

//Symbol of element26
console.log(`Symbol of element26: ${table[2][1]}`);
