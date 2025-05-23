// The sort() method sorts the elements of an array.

// The sort() method sorts the elements as strings in alphabetical and ascending order.

// The sort() method overwrites the original array.

let fruits = ["Banana", "Orange", "Apple", "ndy", "Mango", 1, 2, 3, 4];

// Sort the Array
fruits.sort();
console.log(fruits)




// The slice() method returns selected elements in an array, as a new array.

// The slice() method selects from a given start, up to a (not inclusive) given end.

// The slice() method does not change the original array.

let fruit = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let sum = fruits.slice(1, 3);

console.log(sum)



// map() creates a new array from calling a function for every array element.

// map() does not execute the function for empty elements.

// map() does not change the original array.

// map method iterates over each element of the array, applies the callback function, and returns a new array ( incrementedNumbers ) containing the incremented values.

let numbers = [4, 9, 16, 25];
let newArr = numbers.map((item) => {
    return item*2
})

console.log(newArr)



// The forEach() method calls a function for each element in an array.

// The forEach() method is not executed for empty elements.

// it takes two parameter the item and the index

let fruites = ["apple", "orange",[1,2,3,4], "cherry"];
fruites.forEach((item, i) => {
    if (i == 2) {
        console.log(item[1])
    }
    console.log(`${item} is at index ${i}`)
});

// console.log(fruites)





// filter method

let myarray = ["PM", 2, 6, 4, "Promotex"]

let divtwo = myarray.filter((item) => {
    return typeof(item) == "number"
    // return typeof(item) != "number"
})

console.log(divtwo)