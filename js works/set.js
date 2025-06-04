// ✅ What is data.set?
// It could mean two things, depending on how it's used:
// 🔹 1. set is a property of an object called data:

const data = {
  set: {
    attribute: "value"
  }
};

console.log(data.set.attribute);
// Here:

// data is an object.

// data.set is a nested object.

// data.set.attribute accesses the "value" inside set.

// 🔹 2. set is a method, like in a Map or Set in JavaScript.
// 🔸 Example: Using set() in a Map

const datas = new Map();
datas.set("name", "Promise");
datas.set("name", "Promotex");


console.log(datas.get("name"));
// data is a Map

// .set(key, value) stores data

// .get(key) retrieves data

// 🔸 Example: Using set() in a Set (collection of unique values)

const data2 = new Set();
data2.add("apple");
data2.add("banana");
data2.add("pear");


console.log(data2.has("apple"));
console.log(data2.has("banana"));

// 🔑 Note: Set uses .add(), but Map uses .set().

// 💡 Summary
// When you say...	It means...
// data.set.attribute	Accessing a nested object property
// data.set(key, value)	Storing a key-value pair (in Map)
// data = new Set()	Creating a unique collection (like a list)
// data = { set: ... }	Just a property named "set" inside an object

// 🧪 Want a Practice Task?
// Would you like a small code task where you:

// Access nested properties (data.set.attribute)

// Use .set() and .get() with a Map

// Work with a Set to store unique values?