function solve(input) {
    const peachWeight = 0.140;
    const plumWeight = 0.020;
    const cherryWeight = 0.009;

    const peachPerKompot = 2.5;
    const plumPerKompot = 10;
    const cherryPerKompot = 25;
    const rakiaFromKiloFruit = 0.2;

    let peaches = 0;
    let plums = 0;
    let cherries = 0;
    let fruitsForRakia = 0;

    for (let line of input) {
        let fruitTokens = line.split(/\s+/g);
        let fruit = fruitTokens[0];
        let weight = +fruitTokens[1];

        switch (fruit) {
            case "peach": peaches += weight;
                break;
            case "plum": plums += weight;
                break;
            case "cherry": cherries += weight;
                break;
            default: fruitsForRakia += weight;
        }
    }
    let peachKompots = Math.floor(peaches / peachWeight / peachPerKompot);
    let plumKompots = Math.floor(plums / plumWeight / plumPerKompot);
    let cherryKompots = Math.floor(cherries / cherryWeight / cherryPerKompot);
    let rakiaLiters = fruitsForRakia * rakiaFromKiloFruit;

    console.log(`Cherry kompots: ${cherryKompots}`);
    console.log(`Peach kompots: ${peachKompots}`);
    console.log(`Plum kompots: ${plumKompots}`);
    console.log(`Rakiya liters: ${rakiaLiters.toFixed(2)}`);
}

solve([ 'cherry 1.2',
    'peach 2.2',
    'plum 5.2',
    'peach 0.1',
    'cherry 0.2',
    'cherry 5.0',
    'plum 10',
    'cherry 20.0' ,
    'papaya 20' ]
);

solve([ 'apple 6',
    'peach 25.158',
    'strawberry 0.200',
    'peach 0.1',
    'banana 1.55',
    'cherry 20.5',
    'banana 16.8',
    'grapes 205.65'
    ,'watermelon 20.54'
]);