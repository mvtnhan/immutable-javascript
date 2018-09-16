// 1. Adds an item to the beginning of the array
let addArray = ['a', 'b', 'c', 'd', 'e']; 
//a. Mutating
addArray.unshift('z'); // addArray = ['z', 'a', 'b', 'c', 'd', 'e'] 

//b. Non-mutating
const addArray = ['a', 'b', 'c', 'd', 'e']; 

const b1 = addArray.concat('z');// addArray = ['z', a', 'b', 'c', 'd', 'e'] 
const b2 = ['z', ...addArray]; // addArray = ['z', a', 'b', 'c', 'd', 'e'] 

//==============================================================

//2. Adds an item to the end of the array
let addArray = ['a', 'b', 'c', 'd', 'e']; // addArray.length = 5
// a. Mutating
addArray.push('f');// addArray = ['a', 'b', 'c', 'd', 'e', 'f']  

// b. Non-mutating
const addArray = ['a', 'b', 'c', 'd', 'e']; 

const b1 = addArray.concat('f');// b1 = ['a', 'b', 'c', 'd', 'e', 'f'] 
const b2 = [...addArray, 'f']; // b2 = ['a', 'b', 'c', 'd', 'e', 'f']
console.log(addArray);// addArray = ['a', 'b', 'c', 'd', 'e']  

//==============================================================

// 3. Removes an item at the beginning of the array.
let removeArray = ['a', 'b', 'c', 'd', 'e'];
//a. Mutating
const a1 = removeArray.shift();// removeArray = ['b', 'c', 'd', 'e']  

//b. Non-mutating
const removeArray = ['a', 'b', 'c', 'd', 'e'];

const b1 = removeArray.filter(a => a !== 'a'); // b1 = ['b', 'c', 'd', 'e']
const b2 = removeArray.slice(1, 5) // b2 = ['b', 'c', 'd', 'e']
console.log(removeArray);// removeArray = ['a', 'b', 'c', 'd', 'e']

//==============================================================

// 4. Removes an item at the end of the array
let removeArray = ['a', 'b', 'c', 'd', 'e'];
//a. Mutating
const a1 = removeArray.pop();// removeArray = ['a', 'b', 'c', 'd']  

//b. Non-mutating
const removeArray = ['a', 'b', 'c', 'd', 'e'];

const b1 = removeArray.filter(a => a !== 'e'); // b1 = ['a', 'b', 'c', 'd']  
const b2 = removeArray.slice(0, 4) // b2 = ['a', b', 'c', 'd']  
console.log(removeArray);// removeArray = ['a', 'b', 'c', 'd', 'e']

//==============================================================

// 5. Removing items from an array.
let removingArray = ['a', 'b', 'c', 'd', 'e'];
//a. Mutating
removingArray.splice(0, 2); // removingArray = ['c', 'd', 'e']  

//b. Non-mutating
const removingArray = ['a', 'b', 'c', 'd', 'e'];
const b1 = removingArray.slice(2,5) // // b1 = ['c', 'd', 'e']  
console.log(removingArray);// removingArray = ['a', 'b', 'c', 'd', 'e']

//==============================================================

// 6. Replace item with something else of the array
let replaceArray = ['a', 'b', 'c', 'd', 'e'];  
//a. Mutating
replaceArray.splice(2, 1, 30); // replaceArray = ['a', 'b', 30, 'd', 'e']  

//b. Non-mutating
const replaceArray = ['a', 'b', 'c', 'd', 'e'];

const b1 = replaceArray.map(item => {  
  if(item === 'c') {
    item = 30;
  }
  return item;
}); // b1 = ['a', 'b', 'CAT', 'd', 'e']
console.log(replaceArray);// replaceArray = ['a', 'b', 'c', 'd', 'e']