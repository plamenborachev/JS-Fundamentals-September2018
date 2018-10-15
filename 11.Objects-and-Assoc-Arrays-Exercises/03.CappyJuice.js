function solve(input) {
    let juicesAsStrArr = input.map((j) => j.split(" => "));

    let juices = new Map();
    let bottles = new Map();

    for (let i = 0; i < juicesAsStrArr.length; i++) {
        let juiceName = juicesAsStrArr[i][0];
        let juiceQuantity = +juicesAsStrArr[i][1];

        if (!juices.has(juiceName)) {
            juices.set(juiceName, 0);
        }
        juices.set(juiceName, juices.get(juiceName) + juiceQuantity);

        if (juices.get(juiceName) >= 1000) {
            bottles.set(juiceName, Math.floor(juices.get(juiceName) / 1000));
        }
    }

    for (let [key, value] of bottles) {
        console.log(`${key} => ${value}`);
    }
}

solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);

solve(['Kiwi => 234', 'Pear => 2345', 'Watermelon => 3456', 'Kiwi => 4567', 'Pear => 5678', 'Watermelon => 6789']);