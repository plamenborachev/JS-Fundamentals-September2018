function lastMonth(input) {
    let date = new Date(input[2], input[1] - 1, 0);
    let days = date.getDate();
    console.log(days);
}

lastMonth([17, 3, 2002]);
lastMonth([13, 12, 2004]);