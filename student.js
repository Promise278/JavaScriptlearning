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
    console.log("Maths Department:", maths);
    console.log("Psychology Department:", psychology);
}

alloDept(studentsDb)


function addStu(name, age, gender, course) {
    let studentId = studentsDb.length + 1;
    let newEnty = {name: "promise", id: studentId, age: 32, gender: 'm', course: "maths"}
    studentsDb.push(newEnty)
    console.log("updated student for", studentsDb);
}

addStu(studentsDb)


function deleteStu() {
    let removedStudent = studentsDb.splice(1,1);
    console.log("student deleted from the array", removedStudent)
    console.log("after poping out one student", studentsDb)
}

deleteStu(studentsDb)


// function update(id,elem,value){
//     console.log(elem)
//     console.log(studentsDb.find(student =>student.id == id))
//     let toUpdate = studentsDb.indexOf(studentsDb.find(student =>student.id == id))
//     studentsDb[toUpdate][elem]=value;
//     console.log(studentsDb)
// }

// update(2,"age",12)