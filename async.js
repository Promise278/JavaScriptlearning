let arr = [1, 2, 3, 4, 5];

let five = new Promise((resolve, reject) => {
    arr.forEach((a, i) => {
        if (i>0) {
            if (a+arr[i-1] == 5) {
                reject(`${a} and ${arr[i-1]} adds up to 5`)
            } else {
                resolve(`${a} and ${arr[i-1]} no numbers can add`)
            }   
        }
    })
})

console.log(five);