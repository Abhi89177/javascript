// const array1 =[1,2,3,4,5,6,6];

// // console.log(array1);

// const array2 = new Array (3,4,5,6,78,)

// array2.pop();
// array2.push(34)
// console.log(array2);
// array2.unshift(12)
// array2.shift()

//                   // splice manupulate to orignal array

// const array3 = array2.splice(2 , 4)
// console.log(array3)

                                  // Array into array

// const heros = [ "ram ", "krishna", "Abhira"];
// const demon = ["rawan", "Indrajeet", "kansh"];
// heros.push(demon);
// // console.log(heros);

//                                         // concate
// const mer = [...heros , ...demon];
// console.log(mer);
                                            //    flat
const ram = [2,3,4,5,6,7,[23,45,26],8,9]
const shayam = ram.flat(Infinity);
console.log(shayam);

const rama = "raghuvar";
console.log(Array.isArray(rama));
console.log(Array.from(rama));
let score1= 24;
let score2= 35;
let score3= 49;
console.log(Array.of(score1, score2,score3));


