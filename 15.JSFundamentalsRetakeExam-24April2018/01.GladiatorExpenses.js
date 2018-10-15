function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    let shieldBrakesCount = 0;

    for (let i = 1; i <= lostFightsCount; i++) {
        let shieldBroken = false;
        if (i % 2 === 0){
            expenses += +helmetPrice;
        }
        if (i % 3 === 0){
            expenses += swordPrice;
        }
        if (i % 2 === 0 && i % 3 === 0) {
            expenses += shieldPrice;
            shieldBrakesCount++;
            shieldBroken = true;
        }
        if (shieldBrakesCount !== 0 && shieldBrakesCount % 2 === 0 && shieldBroken){
            expenses += armorPrice;
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.50, 21.50, 40, 200);