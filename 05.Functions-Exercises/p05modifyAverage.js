function solve(number) {
    function checkAverage(n) {
        let sumOfDigits = 0;
        let numberAsString = n.toString();
        for (let i = 0; i < numberAsString.length; i++) {
            sumOfDigits += +numberAsString[i];
        }
        let average = sumOfDigits / numberAsString.length;
        return average > 5;
    }

    while (!checkAverage(number)){
        number = number * 10 + 9;
    }

    console.log(number);
}

solve(101);
solve(5835);