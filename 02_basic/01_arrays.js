const MyArr=[1,2,3,4,5]
// console.log(MyArr)

const myArr2=new Array(1,2,3,4)
MyArr.push(6)
// console.log(MyArr)

MyArr.pop(6)
// console.log(MyArr)

MyArr.unshift(9)
// console.log(MyArr)
MyArr.shift()
// console.log(MyArr)

// console.log(MyArr.includes(9))
// console.log(MyArr.indexOf(3))

//Slice,Splice

console.log("A",MyArr)

const myn1=MyArr.slice(1,3)
console.log(myn1)
console.log("B",MyArr)

const myn2=MyArr.splice(1,3)
console.log("C",MyArr)
console.log(myn2)
