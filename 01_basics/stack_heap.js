// Stack
let myYoutubename = "jayesh";
let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename)  //result => jayesh
console.log(anothername)  //result => chaiaurcode
//Copy Create hoti hai

// Heap Memory
let userOne = {
	email: "user@google.com",
	upi: "user@ybl"
}

let userTwo = userOne
userTwo.email="jayesh@google.com"
console.log(userOne.email)  //result => jayesh@google.com
console.log(userTwo.email)  //result => jayesh@google.com
//Reference create hota hai
//jo bhi update krte hai vo original value me hota hai