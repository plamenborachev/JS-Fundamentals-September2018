function f(input) {
    let distanceFirstObject = (input[0] * 1000 / 3600) * input[2];
    let distanceSecondObject = (input[1] * 1000 / 3600) * input[2];
    console.log(Math.abs(distanceFirstObject - distanceSecondObject));
}

f([0, 60, 3600]);
f([11, 10, 120]);
f([5, -5, 40]);
