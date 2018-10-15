function solve(input) {
    let targetThickness = input[0];
    let result = "";

    for (let i = 1; i < input.length; i++) {
        let currentChunkThickness = input[i];
        let operations = 0;
        result += `Processing chunk ${currentChunkThickness} microns\n`;

        while (currentChunkThickness / 4 >= targetThickness){
            currentChunkThickness /= 4;
            operations++;
        }
        currentChunkThickness = Math.floor(currentChunkThickness);
        if (operations > 0){
            result += `Cut x${operations}\n`;
            result += "Transporting and washing\n";
            operations = 0;
        }

        while (currentChunkThickness * 0.8 >= targetThickness){
            currentChunkThickness *= 0.8;
            operations++;
        }
        currentChunkThickness = Math.floor(currentChunkThickness);
        if (operations > 0) {
            result += `Lap x${operations}\n`;
            result += "Transporting and washing\n";
            operations = 0;
        }

        while (currentChunkThickness - 20 >= targetThickness){
            currentChunkThickness -= 20;
            operations++;
        }
        if (operations > 0) {
            result += `Grind x${operations}\n`;
            result += "Transporting and washing\n";
            operations = 0;
        }

        while (currentChunkThickness - 2 >= targetThickness){
            currentChunkThickness -= 2;
            operations++;
        }
        if (operations > 0) {
            if (currentChunkThickness === targetThickness + 1 && operations > 0) {
                currentChunkThickness--;
                operations++;
                result += `Etch x${operations}\n`;
                result += "Transporting and washing\n";
                result += `X-ray x1\n`;
            } else {
                result += `Etch x${operations}\n`;
                result += "Transporting and washing\n";
            }
        }
        if (currentChunkThickness === targetThickness){
            result += `Finished crystal ${currentChunkThickness} microns\n`;
        }
    }
    console.log(result);
}

solve([1375, 50000]);
solve([1000, 4000, 8100]);