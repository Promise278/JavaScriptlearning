// for (let i = 0; i <= 12; i++) {
//     for( let j = 0; j <= 12; j++) {
//         console.log(`${i} x ${j} = ${i * j}`)
//     }
//     console.log("-----------")
// }







// forEach Loop

// let array = [2, 4, 6, 8, 10]

// // array.forEach((item) => {
// //     console.log(item)
// // })


// // const callback = (item) =>{
// //     console.log(item)
// // }

// // array.forEach(callback)

// function callback(item) {
//     let result = item * 2;
//     console.log(result)
// }

// array.forEach(callback)



// let ages = [2, 4, 6, 8, 10, 12, 14, 15]

// let result = ages.filter((item) => {
//     return item > 10;
// })

// console.log(result)


let studentsDb = [
    {
        name: "Sule",
        age: 22,
        id: 1,
        gender: "m",
        course: "maths"
    },
    {
        name: "Chidinma",
        age: 26,
        id: 2,
        gender: "f",
        course: "psychology"
    },
    {
        name: "Janet",
        age: 24,
        id: 3,
        gender: "f",
        course: "psychology"
    },
    {
        name: "Ojetola",
        age: 19,
        id: 4,
        gender: "m",
        course: "psychology"
    }
]

let maths = []
let psychology = []

function alloDept(arrStu){
    for (let student in arrStu){
        if (arrStu[student].course === "maths"){
            maths.push(arrStu[student])
        } else if(arrStu[student].course === "psychology") {
            psychology.push(arrStu[student])
        }
    }
    // console.log("Maths Department:", maths);
    // console.log("Psychology Department:", psychology);
}

alloDept(studentsDb)


function addStu(name, age, gender, course) {
    let newEnty = {name: "promise", age: 32, gender: 'm', course: "maths"}
    studentsDb.push(newEnty)
    // console.log("updated student for", studentsDb);
}

addStu(studentsDb)


function deleteStu() {
    let removedStudent = studentsDb.pop();
    // console.log("student deleted from the array", removedStudent)
    // console.log("after poping out one student", studentsDb)
}

deleteStu(studentsDb)

// function updateStu(addStu) {
    
// }

// updateStu(addStu)

function update(id,elem,value){
    console.log(elem)
    console.log(studentsDb.find(student =>student.id == id))
    let toUpdate = studentsDb.indexOf(studentsDb.find(student =>student.id == id))
    studentsDb[toUpdate][elem]=value
    console.log(studentsDb)
}

update(2,"age",12)



// const idToDelete = 3;

// let removedtodo = todo.filter(obj => obj.id !== idToDelete);

// const removedObj = todo.find(obj => obj.id === idToDelete)
// console.log("Object removed from todo:", removedObj)

// let newTodo = removedtodo;
// console.log("after deleting item from todo", newTodo)