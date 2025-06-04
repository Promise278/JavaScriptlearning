// let score = 20;

// if (score >= 75 && score <= 100) {
//     console.log("A")
// } else if(score >=60 && score <= 74) {
//     console.log("B")
// } else if(score >= 50 && score <= 59) {
//     console.log("C")
// } else if(score >= 40 && score <= 49) {
//     console.log("D")
// } else if(score >= 30 && score <= 39) {
//     console.log("E")
// } else if(score >= 10 && score <= 29) {
//     console.log(`You falied whoofly and you score is ${"F"}`)
// } else {
//     console.log("Invalid Score")
// }


// let number = Math.random() * 8;

// console.log(number)


// 1. Create a function that checks if a user is eligible to vote (age, citizenship, registered voter)

let age = 19;
let citizenship = "Nigeria";
let registervoter = false;

function ValidateUser(age, citizenship, registervoter) {
    if (age < 18) {
        console.log("User most be atleast 18 and above")
    } else {
        console.log("User Voted Succesfully")
    }
    if (citizenship != "Nigeria") {
        console.log("User must be a member of the Country")
    } else {
        console.log("User can be eligible to vote")
    }
    if (registervoter != true) {
        console.log("User can not vote twice")
    } else {
        console.log("User can vote for any member of their choice")
    }
}

ValidateUser(age, citizenship, registervoter);


// 2. Create a function that will allow a user to register if he has an email or a phone number


let email = "promiseobi209@gmail.com";
let phoneno = 90791798267;

function AllowUser(email, phoneno) {
    if (!email) {
        console.log("User can not register no email provided")
    } else {
        console.log(`${email} registered succesfully`)
    }
    if (!phoneno) {
        console.log("User can not register no phone number provided")
    } else {
        console.log(`${phoneno} successfully registered`)
    }
}

setTimeout(() => {
    AllowUser(email, phoneno)
}, 4000)



//3. Create a function that will check if a user is not a minor

let userage = 19;

function checkMinor(userage) {
    if (userage < 18) {
        console.log("User is a minor")
    } else {
        console.log("User is not a minor")
    }
}

setTimeout(() => {
    checkMinor(userage)
}, 6500)


//4. Create a function that will return "Default" if the value is not set

let name = "Promise";

function ReturnDefault(name) {
    if (name == undefined) {
        console.log("Default")
    } else {
        console.log("Value has been set")
    }
}

setTimeout(() => {
    ReturnDefault(name)
}, 7000)