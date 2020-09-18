function convertTobinary(num){

    if (num <= 255 && num >= 0) {
        return (num >>> 0).toString(2);
    } else {
        return "it is not possible number to solve"
    }

}

console.log(convertTobinary(5));