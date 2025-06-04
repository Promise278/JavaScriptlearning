// If a = 5, b=10, c=20, d=13, e=5, f=13, g=14

// 1. Is "a" equal to "b"? 
// 2. Is "a*b" equal to "d"
// 3. Is "a%b" equal to "c%b"
// 4. Is "d" greater than "f"
// 5. Is "a*b+c" equal to "g*5"
// 6. What will be the output of "(2 + 3) * (4 - 1)"
// 7. What will be the output of 5 == "5"
// 8. Write a program that declares two numbers and prints their sum, difference, product, quotient, and remainder.
// 9. Write a program that takes a number, prints the square of that number.
// 10. Write a program that takes a number and prints the square root of the number.


let a = 5
let b = 10
let c = 20
let d = 13
let e = 5
let f = 13
let g = 14

console.log(a == b)
console.log(a*b == d)
console.log(a%b == c%d)
console.log(d > f)
console.log(a*b+c == g*5)
console.log((2 + 3) * (4 - 1))
console.log(5 == "5")

let num1 = 10
let num2 = 20

let sum = num1 + num2
let diff = num1 - num2
let mul = num1 * num2
let quo = num1 / num2
let rem = num1 % num2
console.log(`The sum = ${sum}`)
console.log(`The difference = ${diff}`)
console.log(`The product = ${mul}`)
console.log(`The quotient = ${quo}`)
console.log(`The reminder = ${rem}`)
console.log(sum, diff, mul, rem)

// square is a number multiply by itself or a number times 2

let sqr = 20;
let result = sqr * sqr
console.log(result)

// square root of the number

let z = 25
let sqrt = z**0.5
console.log(sqrt)


// logical operator

// logical AND(&&) it returns true if the condition of the each operand are true
console.log(true && true)
console.log(true && false)
console.log(false && false)

// logical  OR(||) it returns true if one condition is true
console.log(true || true)
console.log(true || false)
console.log(false || false)


// logical NOT(!) it flip the output if it is true it would flip and turn to false
console.log(!true)
console.log(!false)


// logical Nullish Coalescing(??) it work on two operand left and right operand // returns left hand operand if it is not null and undefined

let user = "promise"
// user ?? "peter"
console.log(user ?? "peter")