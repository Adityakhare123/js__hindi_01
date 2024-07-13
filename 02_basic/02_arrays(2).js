const marvel_heros=["Ironman","Thor","Spiderman"]
const dc_heros=["Batman","Superman","Flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)

// const all_new_heros=[...marvel_heros,...dc_heros]
// console.log(all_new_heros)

const another_array=[1,2,3,[4,5,6],7,[6,7],8,[7,8]]
const real_another_array=another_array.flat(Infinity)
// console.log(real_another_array)

console.log(Array.isArray("Aditya"))//->false bcz its not an array
console.log(Array.from("Aditya"))//*.from* convert any string or other values in arrays

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))
// The Array.of() static method creates a new 
// Array instance from a variable number of arguments, regardless of number or type of the arguments.