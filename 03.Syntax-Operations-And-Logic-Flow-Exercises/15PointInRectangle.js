function f(input) {
    if ((input[0] >= input[2] && input[0] <= input[3])
        &&(input[1] >= input[4] && input[1] <= input[5])){
        console.log("inside");
    } else {
        console.log("outside");
    }
}

f([8, -1, 2, 12, -3, 3]);
f([12.5, -1, 2, 12, -3, 3]);