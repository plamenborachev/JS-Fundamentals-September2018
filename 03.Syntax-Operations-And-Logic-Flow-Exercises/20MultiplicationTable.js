function f(number) {
    let result = "<table border=\"1\">\n";
    result += "<tr><th>x</th>"
    for (let i = 1; i <= number; i++) {
        result += `<th>${i}</th>`;
    }
    result += "</tr>\n";

    for (let i = 1; i <= number; i++) {
        result += `<tr><th>${i}</th>`;
        for (let j = 1; j <= number; j++) {
            result += `<td>${i * j}</td>`;
        }
        result += "</tr>\n";
    }
    result += "</table>";
    console.log(result);
}

f(5);