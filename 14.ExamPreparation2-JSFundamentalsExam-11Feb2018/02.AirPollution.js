function airPollution(matrixInput, forcesInput) {
    let matrix = [];

    for (let matrixInputElement of matrixInput) {
        matrix.push(matrixInputElement.split(/\s+/g).map(e => +e));
    }

    for (let forceToken of forcesInput) {
        let forceTokens = forceToken.split(/\s+/g);
        let force = forceTokens[0];
        let power = +forceTokens[1];

        switch (force) {
            case "breeze":
                for (let i = 0; i < matrix.length; i++) {
                    matrix[power][i] -= 15;
                    if (matrix[power][i] < 0){
                        matrix[power][i] = 0;
                    }
                }
                break;
            case "gale":
                for (let i = 0; i < matrix.length; i++) {
                    matrix[i][power] -= 20;
                    if (matrix[i][power] < 0){
                        matrix[i][power] = 0;
                    }
                }
                break;
            case "smog":
                for (let row = 0; row < matrix.length; row++) {
                    for (let col = 0; col < matrix[row].length; col++) {
                        matrix[row][col] += power;
                    }
                }
                break;
        }
    }

    let polutedAreas = [];

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] >= 50){
                polutedAreas.push(`[${row}-${col}]`);
            }
        }
    }

    if (polutedAreas.length > 0){
        console.log(`Polluted areas: ${polutedAreas.join(", ")}`);
    } else {
        console.log("No polluted areas");
    }
}

airPollution([
        "5 7 72 14 4",
        "41 35 37 27 33",
        "23 16 27 42 12",
        "2 20 28 39 14",
        "16 34 31 10 24",
    ],
    ["breeze 1", "gale 2", "smog 25"]);

airPollution([
        "5 7 3 28 32",
        "41 12 49 30 33",
        "3 16 20 42 12",
        "2 20 10 39 14",
        "7 34 4 27 24",
    ],
    [
        "smog 11", "gale 3",
        "breeze 1", "smog 2"
    ]);

