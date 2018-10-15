function solve(str, delimiter) {
    str.split(delimiter)
        .forEach(s => console.log(s));
}

solve('One-Two-Three-Four-Five', '-');
solve('http://platform.softuni.bg', '.');