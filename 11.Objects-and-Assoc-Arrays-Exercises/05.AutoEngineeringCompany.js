function solve(input) {
    let cars = new Map();
    let carsInfo = input.map(i => i.split(" | "));
    for (let car of carsInfo) {
        let carBrand = car[0];
        let carModel = car[1];
        let producedCars = +car[2];
        if (!cars.has(carBrand)){
            cars.set(carBrand, new Map());
        }
        if (!cars.get(carBrand).has(carModel)) {
            cars.get(carBrand).set(carModel, producedCars);
        } else {
            cars.get(carBrand).set(carModel, cars.get(carBrand).get(carModel) + producedCars);
        }
    }

    for (let [brand, models] of cars) {
        console.log(brand);
        for (let [model, count] of models) {
            console.log(`###${model} -> ${count}`);
        }
    }
}

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);