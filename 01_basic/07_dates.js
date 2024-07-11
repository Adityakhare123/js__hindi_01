let myDate=new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())

// let myCreateDate =new Date(2024,6,11)
// console.log(myCreateDate.toDateString())
let myCreateDate =new Date("01-01'2024")
// console.log(myCreateDate.toDateString())

let myTimestamp=Date.now()
// console.log(myTimestamp)
// console.log(myCreateDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
console.log(newDate.getMonth());
newDate.toLocaleDateString('default',{
    weekday:"long"
})