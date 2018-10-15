function f(input) {
    console.log(Math.sqrt(Math.pow(Math.abs(input[0] - input[3]), 2) + Math.pow(Math.abs(input[1] - input[4]), 2) + Math.pow(Math.abs(input[2] - input[5]), 2)));
}

f([1, 1, 0, 5, 4, 0]);
f([3.5, 0, 1, 0, 2, -1]);

