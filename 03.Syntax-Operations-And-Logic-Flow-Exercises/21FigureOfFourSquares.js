function f(n) {
    let result = "";
    if (n % 2 === 0){
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < 2 * n - 1; j++) {
                if (i === 0 || i === parseInt((n - 1) / 2) || i === n - 2) {
                    if (j === 0 || j === parseInt((2 * n - 1) / 2) || j === 2 * n - 2){
                        result += "+";
                    } else {
                        result += "-";
                    }
                } else {
                    if (j === 0 || j === parseInt((2 * n - 1) / 2) || j === 2 * n - 2){
                        result += "|";
                    } else {
                        result += " ";
                    }
                }
            }
            result += "\n";
        }
    } else {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < 2 * n - 1; j++) {
                if (i === 0 || i === parseInt((n - 1) / 2) || i === n - 1) {
                    if (j === 0 || j === parseInt((2 * n - 1) / 2) || j === 2 * n - 2){
                        result += "+";
                    } else {
                        result += "-";
                    }
                } else {
                    if (j === 0 || j === parseInt((2 * n - 1) / 2) || j === 2 * n - 2){
                        result += "|";
                    } else {
                        result += " ";
                    }
                }
            }
            result += "\n";
        }
    }
    console.log(result);
}

f(4);
f(5);
f(6);
f(7);