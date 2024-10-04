//make a new array having data types of the elements of the Aaron array

const Aaron = ["prince", "Kitiibwa", 2024 - 1993, "Engineer", true];
const types = [];
//console data type of every element in the array
for (let i = 0; i < Aaron.length; i++) {
  console.log(typeof Aaron[i]);

  types[i] = typeof Aaron[i];
}
console.log(types);
