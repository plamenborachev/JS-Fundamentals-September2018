function solve(input) {
    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];
    let x3 = input[4];
    let y3 = input[5];

    function distanceBetweenTwoPoints(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }

    let distanceOneTwoThree = distanceBetweenTwoPoints(x1, y1, x2, y2) + distanceBetweenTwoPoints(x2, y2, x3, y3);
    let distanceOneThreeTwo = distanceBetweenTwoPoints(x1, y1, x3, y3) + distanceBetweenTwoPoints(x3, y3, x2, y2);
    let distanceTwoOneThree = distanceBetweenTwoPoints(x2, y2, x1, y1) + distanceBetweenTwoPoints(x1, y1, x3, y3);

    let shortestDistance = Math.min(distanceOneTwoThree, distanceOneThreeTwo, distanceTwoOneThree);

    if (shortestDistance === distanceOneTwoThree){
        console.log(`1->2->3: ${shortestDistance}`);
    } else if (shortestDistance === distanceOneThreeTwo){
        console.log(`1->3->2: ${shortestDistance}`);
    } else if (shortestDistance === distanceTwoOneThree){
        console.log(`2->1->3: ${shortestDistance}`);
    }
}

solve([0, 0, 2, 0, 4, 0]);
solve([5, 1, 1, 1, 5, 4]);
solve([-1, -2, 3.5, 0, 0, 2]);
