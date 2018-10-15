function atmMachine(input) {
    let atm = [];
    let totalCashInATM;
    for (let arr of input) {
        if (arr.length > 2) {
            arr.forEach(b => atm.push(b));
            let insertedCash = arr.reduce((a, b) => a + b);
            totalCashInATM = atm.reduce((a, b) => a + b);
            console.log(`Service Report: ${insertedCash}$ inserted. Current balance: ${totalCashInATM}$.`);
        } else if (arr.length === 2) {
            let accountBalance = arr[0];
            let moneyToWithdraw = arr[1];
            let withdrawnMoney = 0;
            if (accountBalance < moneyToWithdraw) {
                console.log(`Not enough money in your account. Account balance: ${accountBalance}$.`);
                continue;
            }
            if (atm.length === 0 ){
                console.log('ATM machine is out of order!');
                continue;
            }
            totalCashInATM = atm.reduce((a, b) => a + b);
            if (totalCashInATM < moneyToWithdraw) {
                console.log('ATM machine is out of order!');
                continue;
            }
            atm.sort((b1, b2) => b2 - b1);
            for (let i = 0; i < atm.length; i++) {
                if (atm[i] <= moneyToWithdraw) {
                    moneyToWithdraw -= atm[i];
                    withdrawnMoney += atm[i];
                    atm.splice(i, 1);
                    i--;
                }
                if (moneyToWithdraw <= 0) {
                    break;
                }
            }
            console.log(`You get ${withdrawnMoney}$. Account balance: ${accountBalance - withdrawnMoney}$. Thank you!`);
        } else if (arr.length === 1) {
            let banknote = arr[0];
            let banknoteCount = 0;
            for (let currentBanknote of atm) {
                if (currentBanknote === banknote){
                    banknoteCount++;
                }
            }
            console.log(`Service Report: Banknotes from ${banknote}$: ${banknoteCount}.`);
        }
    }
}

atmMachine([[20, 5, 100, 20, 1],
    [457, 25],
    [1],
    [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
    [20, 85],
    [5000, 4500],
]);