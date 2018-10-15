function solve(arrayOfKingdoms, battles) {
    let kingdoms = new Map();
    let kingdomsBattles = new Map();

    for (let kingdom of arrayOfKingdoms) {
        let kingdomName = kingdom.kingdom;
        let general = kingdom.general;
        let army = +kingdom.army;

        if (!kingdoms.has(kingdomName)){
            kingdoms.set(kingdomName, new Map());
            kingdomsBattles.set(kingdomName, new Map());
        }
        if (!kingdoms.get(kingdomName).has(general)){
            kingdoms.get(kingdomName).set(general, 0);
            kingdomsBattles.get(kingdomName).set(general, [0, 0]);
        }
        kingdoms.get(kingdomName).set(general, kingdoms.get(kingdomName).get(general) + army);
    }

    for (let battle of battles) {
        let attackingKingdom = battle[0];
        let attackingGeneral = battle[1];
        let defendingKingdom = battle[2];
        let defendingGeneral = battle[3];

        if (attackingKingdom !== defendingKingdom){
            let attackingGeneralArmy = kingdoms.get(attackingKingdom).get(attackingGeneral);
            let defendingGeneralArmy = kingdoms.get(defendingKingdom).get(defendingGeneral);

            let attackingGeneralWins = kingdomsBattles.get(attackingKingdom).get(attackingGeneral)[0];
            let attackingGeneralLosses = kingdomsBattles.get(attackingKingdom).get(attackingGeneral)[1];

            let defendingGeneralWins = kingdomsBattles.get(defendingKingdom).get(defendingGeneral)[0];
            let defendingGeneralLosses = kingdomsBattles.get(defendingKingdom).get(defendingGeneral)[1];

            if (attackingGeneralArmy > defendingGeneralArmy){
                kingdoms.get(attackingKingdom)
                    .set(attackingGeneral, Math.floor(attackingGeneralArmy * 1.1));
                kingdoms.get(defendingKingdom)
                    .set(defendingGeneral, Math.floor(defendingGeneralArmy * 0.9));

                kingdomsBattles.get(attackingKingdom)
                    .set(attackingGeneral, [++attackingGeneralWins, attackingGeneralLosses]);
                kingdomsBattles.get(defendingKingdom)
                    .set(defendingGeneral, [defendingGeneralWins, ++defendingGeneralLosses]);
            } else if (attackingGeneralArmy < defendingGeneralArmy) {
                kingdoms.get(attackingKingdom)
                    .set(attackingGeneral, Math.floor(attackingGeneralArmy * 0.9));
                kingdoms.get(defendingKingdom)
                    .set(defendingGeneral, Math.floor(defendingGeneralArmy * 1.1));

                kingdomsBattles.get(attackingKingdom)
                    .set(attackingGeneral, [attackingGeneralWins, ++attackingGeneralLosses]);
                kingdomsBattles.get(defendingKingdom)
                    .set(defendingGeneral, [++defendingGeneralWins, defendingGeneralLosses]);
            }
        }
    }

    let sortedKingdoms = new Map([...kingdomsBattles.entries()]
        .sort((a,b) => Array.from(b[1].values()).map(r => r[0]).reduce((a,b) => a + b)
                        - Array.from(a[1].values()).map(r => r[0]).reduce((a,b) => a + b)
                    || Array.from(a[1].values()).map(r => r[1]).reduce((a,b) => a + b)
                        - Array.from(b[1].values()).map(r => r[1]).reduce((a,b) => a + b)
                    || a[0].localeCompare(b[0])));

    for (let [sortedKingdom, generals] of sortedKingdoms) {
        console.log(`Winner: ${sortedKingdom}`);
        let sortedGenerals = new Map([...generals.entries()]
            .sort((a,b) => kingdoms.get(sortedKingdom).get(b[0]) - kingdoms.get(sortedKingdom).get(a[0])));
        for (let [general, winsLosses] of sortedGenerals) {
            let army = kingdoms.get(sortedKingdom).get(general);
            let wins = kingdomsBattles.get(sortedKingdom).get(general)[0];
            let losses = kingdomsBattles.get(sortedKingdom).get(general)[1];
            console.log(`/\\general: ${general}`);
            console.log(`---army: ${army}`);
            console.log(`---wins: ${wins}`);
            console.log(`---losses: ${losses}`);
        }
        break;
    }
}

solve([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
        { kingdom: "Stonegate", general: "Ulric", army: 4900 },
        { kingdom: "Stonegate", general: "Doran", army: 70000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 0 },
        { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 100000 } ],
    [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"] ]);

solve([ { kingdom: "Stonegate", general: "Ulric", army: 5000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 5000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 1000 } ],
    [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Maiden Way", "Berinon", "YorkenShire", "Quinn"] ]);

solve([ { kingdom: "Maiden Way", general: "Merek", army: 5000 }, { kingdom: "Stonegate", general: "Ulric", army: 4900 }, { kingdom: "Stonegate", general: "Doran", army: 70000 }, { kingdom: "YorkenShire", general: "Quinn", army: 0 }, { kingdom: "YorkenShire", general: "Quinn", army: 2000 } ], [ ["YorkenShire", "Quinn", "Stonegate", "Doran"], ["Stonegate", "Ulric", "Maiden Way", "Merek"] ]);