function coffeeMachine(input) {
    const coffeeCaffeinePrice = 0.8;
    const coffeeDecafPrice = 0.9;
    const teaPrice = 0.8;
    const sugarPrice = 0.1;

    let totalMoneyEarned = 0;

    for (let line of input) {
        let moneyNeeded = 0;
        let tokens = line.split(", ");
        let coins = +tokens[0];
        let typeOfDrink = tokens[1];
        if (typeOfDrink === "coffee") {
            let typeOfCoffee = tokens[2];
            if (typeOfCoffee === "caffeine") {
                moneyNeeded += coffeeCaffeinePrice;
            } else {
                moneyNeeded += coffeeDecafPrice;
            }
            if (tokens.length === 4) {
                let sugar = +tokens[3];
                if (sugar > 0 && sugar <= 5) {
                    moneyNeeded += sugarPrice;
                }
            } else if (tokens.length === 5) {
                moneyNeeded += +(moneyNeeded * 0.1).toFixed(1);
                let sugar = +tokens[4];
                if (sugar > 0 && sugar <= 5) {
                    moneyNeeded += sugarPrice;
                }
            }
        } else if (typeOfDrink === "tea") {
            moneyNeeded += teaPrice;
            if (tokens.length === 3) {
                let sugar = +tokens[2];
                if (sugar > 0 && sugar <= 5) {
                    moneyNeeded += sugarPrice;
                }
            } else {
                moneyNeeded += +(moneyNeeded * 0.1).toFixed(1);
                let sugar = +tokens[3];
                if (sugar > 0 && sugar <= 5) {
                    moneyNeeded += sugarPrice;
                }
            }
        }
        if (coins >= moneyNeeded) {
            console.log(`You ordered ${typeOfDrink}. Price: ${moneyNeeded.toFixed(2)}$ Change: ${(coins - moneyNeeded).toFixed(2)}$`);
            totalMoneyEarned += moneyNeeded;
        } else {
            console.log(`Not enough money for ${typeOfDrink}. Need ${(moneyNeeded - coins).toFixed(2)}$ more.`);
        }
    }
    console.log(`Income Report: ${totalMoneyEarned.toFixed(2)}$`);
}

coffeeMachine(['1.00, coffee, caffeine, milk, 4',
                '0.40, tea, milk, 2',
                '1.00, coffee, decaf, 0']);

coffeeMachine(['8.00, coffee, decaf, 4',
    '1.00, tea, 2']);