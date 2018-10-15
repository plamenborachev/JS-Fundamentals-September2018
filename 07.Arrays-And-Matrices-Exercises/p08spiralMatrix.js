function solve(rows, cols) {
    let matrix = [];
    let initVal = 1;

    let currUpRowIndex = 0;
    let currDownRowIndex = rows - 1;
    let currLeftColIndex = 0;
    let currRightColIndex = cols - 1;

    for (let i = 0; i < rows; i++) {
        matrix.push([]);
    }

    for (let i = 0; i < cols; i++) {
        matrix[currUpRowIndex][i] = initVal++;
    }
    currUpRowIndex++;

    while (initVal <= rows * cols){
        for (let i = currUpRowIndex; i <= currDownRowIndex; i++) {
            matrix[i][currRightColIndex] = initVal++;
        }
        currRightColIndex--;
        for (let i = currRightColIndex; i >= currLeftColIndex ; i--) {
            matrix[currDownRowIndex][i] = initVal++;
        }
        currDownRowIndex--;
        for (let i = currDownRowIndex; i >= currUpRowIndex; i--) {
            matrix[i][currLeftColIndex] = initVal++;
        }
        currLeftColIndex++;
        for (let i = currLeftColIndex; i <= currRightColIndex; i++) {
            matrix[currUpRowIndex][i] = initVal++;
        }
        currUpRowIndex++;
    }
    console.log(matrix.map(row => row.join(' '))
        .join('\n'));
}

solve(5, 5);
solve(3, 3);
solve(6, 6);