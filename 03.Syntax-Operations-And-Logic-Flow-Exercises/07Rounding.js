function f(input) {
    console.log(+input[0].toFixed(input[1] <= 15 ? input[1] : 15));
}

f([3.1415926535897932384626433832795, 2]);
f([10.5, 3]);

