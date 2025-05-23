// let obj1 = {name: "promise"}
// let obj2 = {mode: "Game"}
// let onj3 = {track: "web2"}

// let value = Object.values(obj2)
// console.log(value)

// let items = {
//     users: ["promise", "pius", "obi"],
//     fruits: ["mango", "apple", "pear"],
//     animals: ["goat", "dog", "lion"],
//     cars: ["Bmw", "Lambo", "ferrari"]
// }

// let keys = Object.keys(items)

// if (keys.includes("cars")) {
//     if (items.cars.includes("Bmw")) {
//         console.log("Bmw exist")
//     } else{
//         console.log("Bmw not found")
//     }
// } else {
//     console.log("cars does not exist")
// }

// if (keys.includes("cars") && items.cars.includes("Bmw") ) {
//     console.log("Bmw exist")
// } else {
//     console.log("cars does not exist")
// }

// let obj1 = {name: "promise",mode: "Game", track: "web2" }
// let keys = Object.keys(obj1)

// if ("name" in obj1) {
//     console.log(obj1.name)
// }

// if (keys.includes("name")) {
//     console.log(obj1.name)
// }


let fruits = {
    fruits1: "mango",
    fruits2: "pear",
    fruits3: "guava",
    fruits4: "apple"
}

Object.freeze(fruits)
Object.seal(fruits)


if (Object.isFrozen(fruits)) {
    console.log("fruits is in state of total lock down")
} else {
    fruits.fruits1 = "melon"
}

fruits.fruits1 = "melon"

console.log(fruits)

// console.log(Object.isFrozen(fruits))





let user = {name: "promsie", gender: "male", age: 20}

user.myclass = "web2"
user.name = "Promise"

console.log(user)