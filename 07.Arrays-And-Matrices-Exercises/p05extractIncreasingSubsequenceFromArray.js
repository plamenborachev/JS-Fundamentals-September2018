function solve(input) {
    let resultArr = [input[0]];
    for (let i = 1; i < input.length; i++) {
        if (input[i] >= resultArr[resultArr.length - 1]){
            resultArr.push(input[i]);
        }
    }
    resultArr.forEach(e => console.log(e));
}

solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
);

solve([1,
    2,
    3,
    4]
);

solve([20,
    3,
    2,
    15,
    6,
    1]
);