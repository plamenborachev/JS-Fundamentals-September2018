function solve(str) {
    let resultStr = str.split(" ")
        .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
        .join(" ");
    console.log(resultStr);
}

solve('Capitalize these words');
solve('Was that Easy? tRY thIs onE for SiZe!');