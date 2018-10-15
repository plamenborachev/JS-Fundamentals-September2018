function solve(input) {
    let sum = input[0].reduce((a, b) => a + b);
    let isMagical = true;
    for (let i = 1; i < input.length; i++) {
        let currentRowSum = input[i].reduce((a, b) => a + b);
        if (currentRowSum !== sum) {
            isMagical = false;
            break;
        }
    }
    for (let col = 0; col < input[0].length; col++) {
        let currentColumnSum = 0;
        for (let row = 0; row < input.length; row++) {
            currentColumnSum += input[row][col];
        }
        if (currentColumnSum !== sum) {
            isMagical = false;
            break;
        }
    }
    console.log(isMagical);
}

solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
);
solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
);
solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
);