function solve(input) {
    let result = [];
    for (let str of input) {
        let matches = str.match(/\d+/g);
        if (matches){
            result = result.concat(matches);
        }
    }
    console.log(result.join(" "));
}

solve(['The300',
    'What is that?',
    'I think it’s the 3rd movie.',
    'Lets watch it at 22:45']
);
solve(['123a456',
    '789b987',
    '654c321',
    '0']
);
solve(['Let’s go11!!!11!',
    'Okey!1!']
);