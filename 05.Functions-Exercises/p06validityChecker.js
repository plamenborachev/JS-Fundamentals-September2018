function solve(input) {
    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];

    function distanceToStart(x, y) {
        return Number.isInteger(Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)));
    }

    function distanceBetweenTwoPoints(x1, y1, x2, y2) {
        return Number.isInteger(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));
    }

    if (distanceToStart(x1, y1)){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (distanceToStart(x2, y2)){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (distanceBetweenTwoPoints(x1, y1, x2, y2)){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

solve([3, 0, 0, 4]);
solve([2, 1, 1, 1]);