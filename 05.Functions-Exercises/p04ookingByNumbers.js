function solve(input) {
    let number = +input[0];
    let operation = "";

    for (let i = 1; i < input.length; i++) {
        operation = input[i];
        if (operation === "chop") {
            number /= 2;
            console.log(number);
        } else if (operation === "dice"){
            number = Math.sqrt(number);
            console.log(number);
        } else if (operation === "spice"){
            console.log(++number);
        } else if (operation === "bake"){
            number *= 3;
            console.log(number);
        } else if (operation === "fillet"){
            number *= 0.8;
            console.log(number);
        }
    }
}

solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);