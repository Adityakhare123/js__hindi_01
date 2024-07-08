const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

const otherNumber=123.8966
// console.log(otherNumber.toPrecision(3));

const hundread = 1000000
// console.log(hundread.toLocaleString());//-> giving value according to US/-
// console.log(hundread.toLocaleString('en-In'));//->giving value of amount in india rs/-

//++++++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.2))//take max value 
// console.log(Math.floor(4.9))//take minimum value 
// console.log(Math.sqrt(25))
// console.log(Math.min(5,11,2,35,6))
// console.log(Math.max(6,8,23,2,44))

console.log(Math.random());
console.log((Math.random)*10 + 1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1))+min)