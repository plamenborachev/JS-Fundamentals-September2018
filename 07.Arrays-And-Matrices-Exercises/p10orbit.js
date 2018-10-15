function solve(input) {
    let width = input[0];
    let height = input[1];
    let x = input[2];
    let y = input[3];

    let matrix = [];

    for (let i = 0; i < height; i++) {
        matrix.push([]);
    }

    matrix[x][y] = 1;

    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            matrix[row][col] = Math.max(Math.abs(x - row),Math.abs(y - col)) + 1;
        }
    }
    console.log(matrix.map(row => row.join(' '))
        .join('\n'));
}

solve([4, 4, 0, 0]);
solve([5, 5, 2, 2]);
solve([3, 3, 2, 2]);