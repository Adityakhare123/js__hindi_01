const name = "Aditya"
const repoCount= 10
// console.log(name + repoCount + "Value")
// console.log(`My name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('GodofWar-Xbox-Ps5')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

const newString=gameName.substring(0,4)
console.log(newString)

const anotherString=gameName.slice(-8,4)
console.log(anotherString)

const newStringOne = " Aditya "
console.log(newStringOne.trim())
console.log(newStringOne)

const url ="https://aditya.com//aditya%20khare"
console.log(url.replace('%20','-'))
console.log(url.includes('aditya'))

console.log(gameName.split('-'))


