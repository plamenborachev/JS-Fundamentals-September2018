function solve(input) {
    let employees = input.map((e) => JSON.parse(e));
    let table = "<table>\n";
    employees.forEach((e) => {
        table += "\t<tr>\n";
        table += `\t\t<td>${e.name}</td>\n`;
        table += `\t\t<td>${e.position}</td>\n`;
        table += `\t\t<td>${e.salary}</td>\n`;
        table += "\t<tr>\n";
    });
    table += "</table>";
    console.log(table);
}

solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']);