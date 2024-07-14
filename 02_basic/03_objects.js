const mySym=Symbol("key1")
const JsUser={
    name:"Aditya",
    "fullname":"Aditya Khare",
    [mySym]:"mykey",
    age:20,
    email:"Aditya@gmail.com",
    isLoggiedIn:false,
    LastLoginDays:["Monday","Saturday"]
}
// console.log(JsUser.email)//this not a  correct way to declare or call object
console.log(JsUser["email"])
console.log(JsUser["fullname"])
console.log(typeof JsUser[mySym])

JsUser.email="Aditya@google.com"
// Object.freeze(JsUser)-> it use to fix the object
JsUser.email="Aditya@microsoft.com"
// console.log(JsUser)

JsUser.greeting=function(){
    console.log("Hello world")
}
JsUser.greetingTwo=function(){
    console.log(`Hello world,${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())