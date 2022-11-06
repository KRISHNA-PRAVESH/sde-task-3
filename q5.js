//a
const str = 'In space,no one can hear you code.';
console.log(str.split()); //entire string will be the array element
console.log(str.split('e')); //split to another element whenever an 'e' occurs
console.log(str.split(' ')); //split to another element whenever a space occurs
console.log(str.split('')); //splits each character into an array element

//observation: the purpose of the parameter tells where and when to split the array


//b
const arr = ['B','n','n',5]
console.log(arr.join()); //joins into a string with comma(,) inbetween every element
console.log(arr.join('a')); //joins into a string with 'a' inbetween every element
console.log(arr.join(' ')); //joins into a string with space inbetween every element
console.log(arr.join('')); //joins into a string with no space inbetween

//observation: The pupose of parameter tells what character to add inbetween each element of the array while combining it into a string

//c: Split and join both haven't changed the original string and array


//d
const phrase = "water,space suits,food,plasma sword,batteries";

//splitting the string after each comma
const array = phrase.split(',');

//capitalizing all elements and converting into a string

const ans = array.join(',').toUpperCase();

console.log(ans);
