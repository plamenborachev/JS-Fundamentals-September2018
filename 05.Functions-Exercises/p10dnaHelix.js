function solve(number) {
    let helixSequence = "ATCGTTAGGG";
    let dnaHelix = "";

    for (let i = 0; i < number; i++) {
        if (i % 4 === 0) {
            dnaHelix += `**${helixSequence[(i * 2) % 10]}${helixSequence[(i * 2 + 1) % 10]}**\n`
        } else if (i % 4 === 1 || i % 4 === 3) {
            dnaHelix += `*${helixSequence[(i * 2) % 10]}--${helixSequence[(i * 2 + 1) % 10]}*\n`
        } else if (i % 4 === 2) {
            dnaHelix += `${helixSequence[(i * 2) % 10]}----${helixSequence[(i * 2 + 1) % 10]}\n`
        }
    }
    console.log(dnaHelix);
}

solve(4);
solve(10);