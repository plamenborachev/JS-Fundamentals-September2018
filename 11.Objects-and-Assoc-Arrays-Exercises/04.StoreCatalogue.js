function solve(input) {
    let products = input.map(i => i.split(" : "))
        .map(p => {
            return {
                name : p[0],
                price : +p[1]
            }
        })
        .sort((p1, p2) => p1.name.localeCompare(p2.name));

    let initial ="";

    for (let product of products) {
        if (initial === "" || initial !== product.name.charAt(0)){
            console.log(initial = product.name.charAt(0));
        }
        console.log(`  ${product.name}: ${product.price}`);
    }
}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);

solve(['Banana : 2', 'Rubic\'s Cube : 5', 'Raspberry P : 4999', 'Rolex : 100000', 'Rollon : 10', 'Rali Car : 2000000', 'Pesho : 0.000001', 'Barrel : 10']);