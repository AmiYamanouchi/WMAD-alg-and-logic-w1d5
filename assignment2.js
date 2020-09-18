/* 
Create a function that takes two numbers as arguments (num, length) and 
returns an array of multiples of num up to length.
*/

const arrayOfMultiples = function(num,length) {

    let newArray = [];

    for (i = 1; i <= length; i++) {
        newArray.push(num * i)
    }

    return newArray;

}



// answer should be [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
console.log(arrayOfMultiples(12, 10))

// answer should be [17, 34, 51, 68, 85, 102]
console.log(arrayOfMultiples(17, 6))