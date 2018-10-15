function bitcoinMining(input) {
    let moneyInBGN = 0;
    let bitcoins = 0;
    let firstDay;

    for (let i = 0; i < input.length; i++) {
        let goldCurrentDay = +input[i];

        if (i % 3 === 2){
            goldCurrentDay *= 0.7;
        }
        moneyInBGN += goldCurrentDay * 67.51;
        if (moneyInBGN >= 11949.16){
            let bitcoinsBought = parseInt(moneyInBGN / 11949.16);
            bitcoins += bitcoinsBought;
            moneyInBGN -= 11949.16 * bitcoinsBought;
            if (!firstDay){
                firstDay = i + 1;
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoins}`);
    if (bitcoins > 0){
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${moneyInBGN.toFixed(2)} lv.`);
}

bitcoinMining(["100", "200", "300"]);
bitcoinMining(["50", "100"]);
bitcoinMining(["3124.15", "504.212", "2511.124"]);
