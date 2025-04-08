// CONDITIONAL STATEMENT (IF AND ELSE WITH ELSE IF)

//  if or else statement write a program that allows you to rate students with there score and grade them 70 = a 60 = b 50 = c 40 = d 30 = e 20-10
// let a program that store names of a user and if the name is not correct then 


// let score = 48
// let grade;
// let message;

// if (score > 90 && score <= 100) {
//     grade = "A"
//     message = `your passed and your grade is ${grade}`
// } else if (score >= 80 && score <= 89) {
//     grade = "B"
//     message = `your passed and your grade is ${grade}`
// } else if (score >= 70 && score <= 79) {
//     grade = "C"
//     message = `your passed and your grade is ${grade}`
// } else if (score >= 50 && score <= 69) {
//     grade = "D"
//     message = `your passed on trial and your grade is ${grade}`
// } else if (score >= 40 && score <= 59) {
//     grade = "E"
//     message = `your failed whoofly and your grade is ${grade}`
// } else if (score >= 10 && score <= 20,30) {
//     grade = "F"
//     message = `your failed and would be reapeted and your grade is ${grade}`
// }

// console.log(message)
// console.log(grade)

// SWITCH STATEMENT 

// it is in a particular case

// let position = 1;

// switch (position) {
//     case 1:
//         console.log("you have a bicycle")
//         break;
//     case 2:
//         console.log("you have a toy car")
//         break;
//     case 3:
//         console.log("you have a box of chocolate")
//     default:
//         console.log("you have nothing")
//         break;
// }


// let age = 18;

// switch (age) {
//     case 18:
//         console.log("You are exactly 18");
//         break;
//     case 14:
//         console.log("You are good to go");
//         break;
//     default:
//         console.log("Passed");
//         break;
// }


// find the mountains pick.


let input = [1,3,2,4,1,5,2,10]
let output = [];

for (let i = 0; i < input.length; i++) {
    if (input[i] > input[i - 1] && input[i] > input[i + 1]) {
        output.push(input[i])
    }
}
console.log(output)


function deleteStu(id) {
    let removedStudent = studentsDb.filter(student => {
        studentsDb.id != id
    });
    console.log("student deleted from the array", removedStudent)
    console.log("after poping out one student", studentsDb)
    studentsDb = removedStudent;
}


console.log(studentsDb)

deleteStu(2)