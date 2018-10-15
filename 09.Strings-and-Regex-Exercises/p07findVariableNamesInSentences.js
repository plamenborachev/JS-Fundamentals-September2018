function solve(input) {
    let pattern = /\b_[a-zA-Z0-9]+\b/g;
    let variableNames = input.match(pattern);
    console.log(variableNames
        .map((w) => w.substr(1))
        .join());
}

solve('The _id and _age variables are both integers.');
solve('Calculate the _area of the _perfectRectangle object.');
solve('__invalidVariable _evenMoreInvalidVariable_ _validVariable');