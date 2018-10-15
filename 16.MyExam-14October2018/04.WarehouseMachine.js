function warehouseMachine(input) {
    let warehouse = new Map();

    for (let line of input) {
        let commandTokens = line.split(", ");
        let command = commandTokens[0];
        let brand = commandTokens[1];
        let coffee = commandTokens[2];
        let expireDate = commandTokens[3];
        let quantity = +commandTokens[4];

        switch (command) {
            case "IN":
                if (!warehouse.has(brand)) {
                    warehouse.set(brand, new Map());
                }
                if (!warehouse.get(brand).has(coffee)) {
                    warehouse.get(brand).set(coffee, {expireDate: expireDate, quantity: quantity});
                } else {
                    if (expireDate.localeCompare(warehouse.get(brand).get(coffee).expireDate) > 0) {
                        warehouse.get(brand).set(coffee, {expireDate: expireDate, quantity: quantity});
                    } else if (expireDate.localeCompare(warehouse.get(brand).get(coffee).expireDate) === 0) {
                        warehouse.get(brand).get(coffee).quantity += quantity;
                    }
                }
                break;
            case "OUT":
                if (warehouse.has(brand)
                    && warehouse.get(brand).has(coffee)
                    && warehouse.get(brand).get(coffee).expireDate.localeCompare(expireDate) > 0
                    && warehouse.get(brand).get(coffee).quantity >= quantity) {
                    warehouse.get(brand).get(coffee).quantity -= quantity;
                }
                break;
            case "REPORT":
                console.log('>>>>> REPORT! <<<<<');
                for (let [brand, coffees] of warehouse) {
                    console.log(`Brand: ${brand}:`);
                    for (let [coffeeName, spec] of coffees) {
                        console.log(`-> ${coffeeName} -> ${spec.expireDate} -> ${spec.quantity}.`);
                    }
                }
                break;
            case "INSPECTION":
                console.log('>>>>> INSPECTION! <<<<<');
                let sortedWarehouse = new Map([...warehouse.entries()]
                    .sort((a,b) => a[0].localeCompare(b[0])));
                for (let [brand, coffees] of sortedWarehouse) {
                    console.log(`Brand: ${brand}:`);
                    let sortedCoffees = new Map([...coffees.entries()]
                        .sort((a,b) => b[1].quantity - a[1].quantity));
                    for (let [coffeeName, spec] of sortedCoffees) {
                        console.log(`-> ${coffeeName} -> ${spec.expireDate} -> ${spec.quantity}.`);
                    }
                }
                break;
        }
    }
}

warehouseMachine([
    "IN, Batdorf & Bronson, Espresso, 2025-05-25, 20",
    "IN, Folgers, Black Silk, 2023-03-01, 14",
    "IN, Lavazza, Crema e Gusto, 2023-05-01, 5",
    "IN, Lavazza, Crema e Gusto, 2023-05-02, 5",
    "IN, Folgers, Black Silk, 2022-01-01, 10",
    "IN, Lavazza, Intenso, 2022-07-19, 20",
    "OUT, Dallmayr, Espresso, 2022-07-19, 5",
    "OUT, Dallmayr, Crema, 2022-07-19, 5",
    "OUT, Lavazza, Crema e Gusto, 2020-01-28, 2",
    "REPORT",
    "INSPECTION",
]);