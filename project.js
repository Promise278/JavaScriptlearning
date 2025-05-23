function isPalindrome(str) {
    // Convert the string to lowercase to make it case-insensitive
    let normalizedStr = str.toLowerCase();
    // Reverse the string and compare it with the original
    return normalizedStr === normalizedStr.split('').reverse().join('');
}

// Example usage
let items = ["bob", "pop", "krop"];
items.forEach(item => {
    if (isPalindrome(item)) {
        console.log(`${item} is a palindrome.`);
    } else {
        console.log(`${item} is not a palindrome.`);
    }
});

function findMax(arr) {
    let max = arr[0]; // Assume the first element is the maximum
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Update max if a larger number is found
        }
    }
    return max;
}

// Example usage
let numbers = [3, 7, 2, 9, 5];
console.log(`The maximum number is: ${findMax(numbers)}`);