function solve(input) {
    let uniqueArrays = new Set();
    for (let inputElement of input) {
        uniqueArrays.add((JSON.parse(inputElement).sort((a,b) => b - a)).join(", "));
    }

    Array.from(uniqueArrays)
        .sort((a,b) => a.length - b.length)
        .forEach(a => console.log("[" + a + "]"));
}

solve(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]);

solve(["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"]);