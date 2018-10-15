function solve(input) {
    let arr = [];
    let initialNumber = 0;

    for (let i = 0; i < input.length; i++) {
        initialNumber++;
        if (input[i] === "add"){
            arr.push(initialNumber);
        } else if (input[i] === "remove"){
            arr.pop();
        }
    }

    if (arr.length === 0){
        console.log("Empty");
    } else {
        arr.forEach(e => console.log(e));
    }
}

solve(['add',
    'add',
    'add',
    'add']
);
solve(['add',
    'add',
    'remove',
    'add',
    'add']
);
solve(['remove',
    'remove',
    'remove']
);