// 1. Simulate user registration process in three dependent steps

function registerUser(user) {
    return new Promise((resolve, reject) => {
        if (!user || !user.email) {
            reject("Invalid user data");
        } else {
            console.log("Registering user...");
            setTimeout(() => {
                resolve(user);
            }, 1000);
        }
    });
}

function sendEmail(user) {
    return new Promise((resolve, reject) => {
        if (!user.email) {
            reject("No email provided");
        } else {
            console.log(`Sending email to ${user.email}...`);
            setTimeout(() => {
                resolve(user);
            }, 1000);
        }
    });
}

function grantAccess(user) {
    return new Promise((resolve) => {
        console.log(`Granting access to ${user.email}...`);
        setTimeout(() => {
            resolve(`Access granted to ${user.email}`);
        }, 1000);
    });
}

let user = { email: "promiseobi2007@gmail.com" };

registerUser(user)
    .then(sendEmail)
    .then(grantAccess)
    .then((result) => console.log(result))
    .catch((err) => console.error("Error:", err));

// 2. delayedGreeting function

function delayedGreeting(name) {
    return new Promise((resolve, reject) => {
        if (!name) {
            reject("Name cannot be empty");
        } else {
            setTimeout(() => {
                resolve(`Hello, ${name}!`);
            }, 2000);
        }
    });
}


delayedGreeting("Promise").then((msg) => console.log(msg)).catch(error => console.log(error))