// let todo = [];

// // let todos1 = todo;

// todo.push("Promise");

// todo.push("Frontend & Software");

// todo.push(57);

// todo.push("hello world!")

// console.log(todo);


// let accountNum = [];

// let senderNum = [];


// senderNum.push("$154500")

// accountNum.push("$120000")

// senderNum.push("$7506900000")

// accountNum.push("$356480000")

// console.log(accountNum.splice(1), senderNum);

// 1. Simulate user registration process in three dependent steps


function registerUser(user) {
   return new Promise((resolve, reject) => {
    if (!user || user.email) {
        reject(`!invalid email user`)
    } else {
        console.log(`User Registered Succesfully`)
        setTimeout(() => {
            resolve(user)
        }, 3000)
    }
   })
}

let user = { email: "promiseobi2007@gmail.com"}

registerUser(user)