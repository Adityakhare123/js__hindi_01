// const tinderUser= new Object()
const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="Aditya"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
email:"Aditya@google.com",
fullname:{
    username:{
        firstname:"Aditya",
        lastname:"Khare"
    }
}
}

// console.log(regularUser.fullname.username)
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"e",6:"f"}

const obj4={...obj1,...obj2,...obj3}
// console.log(obj4)

const user=[{
    id:1,
    email:"A@gmail.com"
},
{
    id:1,
    email:"A@gmail.com"
}
]

user[1].email
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnproperty('isLoggedIn'))
