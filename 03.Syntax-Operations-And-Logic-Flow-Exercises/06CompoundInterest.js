function f(input) {
    let interest = input[0] * Math.pow(1 + (input[1] / 100) / (12 / input[2]), (12 / input[2]) * input[3]);
    console.log(interest.toFixed(2));
}

f([1500, 4.3, 3, 6]);
f([100000, 5, 12, 25]);