//  Basic Math Methods in JavaScript
// In JavaScript, Math is a built-in object that has many useful methods for mathematical tasks.

// ✅ 1. Math.floor()
// Rounds down to the nearest whole number.

// js 
console.log("math.floor", Math.floor(4.9)); // → 4
// ✅ 2. Math.ceil()
// Rounds up to the nearest whole number.

// js 
console.log("math.ceil", Math.ceil(4.1)); // → 5
// ✅ 3. Math.round()
// Rounds to the nearest whole number.

// js 
console.log("math.round", Math.round(7.5)); // → 5
console.log("math.round", Math.round(4.4)); // → 4
// ✅ 4. Math.random()
// Gives a random number between 0 (inclusive) and 1 (exclusive).

// js 
console.log("math.random", Math.random()); // → 0.3421 (random)
// To get a random number between 1 and 10:

// js 
console.log("math.floor", Math.floor(Math.random() * 10) + 1);
// ✅ 5. Math.max() / Math.min()
// Find the largest or smallest number.

// js 
console.log("math.max", Math.max(3, 7, 2)); // → 7
console.log("math.min", Math.min(3, 7, 2)); // → 2
// ✅ 6. Math.pow() and Math.sqrt()
// Power (exponentiation)

// Square root

// js 
console.log("math.pow", Math.pow(2, 3)); // → 8 (2^3)
console.log("math.sqrt", Math.sqrt(16));  // → 4
// ✅ 7. Math.abs()
// Gets the absolute value (turns negative numbers positive).

// js 
console.log("math.abs", Math.abs(-10)); // → 10
// math.abs() is a mathematical function that returns the absolute value of a number. This means it removes the negative sign from a number, leaving only its magnitude (or distance from zero). For example, math.abs(-5) would return 5. The absolute value of a positive number is the number itself