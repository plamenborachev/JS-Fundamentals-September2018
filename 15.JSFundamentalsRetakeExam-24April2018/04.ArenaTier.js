function solve(input) {
    let gladiators = new Map();

    for (let line of input) {
        if (line === "Ave Cesar"){
            break;
        }
        if (line.includes(" -> ")){
            let gladiatorTokens = line.split(" -> ");
            let gladiator = gladiatorTokens[0];
            let technique = gladiatorTokens[1];
            let skill = +gladiatorTokens[2];

            if (!gladiators.has(gladiator)){
                gladiators.set(gladiator, new Map());
            }
            if (!gladiators.get(gladiator).has(technique)){
                gladiators.get(gladiator).set(technique, skill);
            }
            if (gladiators.get(gladiator).get(technique) < skill){
                gladiators.get(gladiator).set(technique, skill)
            }
        } else if (line.includes(" vs ")){
            let gladiatorTokens = line.split(" vs ");
            let gladiator1 = gladiatorTokens[0];
            let gladiator2 = gladiatorTokens[1];

            if (gladiators.has(gladiator1) && gladiators.has(gladiator2)){
                let gladiator1Skills = 0;
                let gladiator2Skills = 0;

                for (let tech of gladiators.get(gladiator1).keys()) {
                    if (gladiators.get(gladiator2).has(tech)){
                        gladiator1Skills += gladiators.get(gladiator1).get(tech);
                        gladiator2Skills += gladiators.get(gladiator2).get(tech);
                    }
                }

                if (gladiator1Skills > gladiator2Skills){
                    gladiators.delete(gladiator2);
                } else if (gladiator1Skills < gladiator2Skills){
                    gladiators.delete(gladiator1);
                }
            }
        }
    }

    let sortedGladiators = new Map([...gladiators.entries()]
        .sort((a,b) => Array.from(b[1].values()).reduce((a,b) => a + b) - Array.from(a[1].values()).reduce((a,b) => a + b)
        || a[0].localeCompare(b[0])));

    for (let [gladiator, techniques] of sortedGladiators) {
        let totalSkill = 0;
        for (let skill of techniques.values()) {
            totalSkill += skill;
        }
        console.log(`${gladiator}: ${totalSkill} skill`);

        let sortedTechniques = new Map([...techniques.entries()]
            .sort((t1,t2) => t2[1] - t1[1] || t1[0].localeCompare(t2[0])));

        for (let [tech, skill] of sortedTechniques) {
            console.log(`- ${tech} <!> ${skill}`);
        }
    }
}

solve(["Pesho -> BattleCry -> 400",
"Gosho -> PowerPunch -> 300",
"Stamat -> Duck -> 200",
"Stamat -> Tiger -> 250",
"Ave Cesar"]);

solve(["Pesho -> Duck -> 400",
"Julius -> Shield -> 150",
"Gladius -> Heal -> 200",
"Gladius -> Support -> 250",
"Gladius -> Shield -> 250",
"Pesho vs Gladius",
"Gladius vs Julius",
"Gladius vs Gosho",
"Ave Cesar"]);