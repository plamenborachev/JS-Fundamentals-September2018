function f1Championship(input) {
    let championship= new Map();
    let pilots = [];

    for (let line of input) {
        let pilotTokens = line.split(" -> ");
        let team = pilotTokens[0];
        let pilot = pilotTokens[1];
        let points = +pilotTokens[2];
        
        if (!championship.has(team)){
            championship.set(team, new Map());
        }
        if (!championship.get(team).has(pilot) && championship.get(team).size < 2 && !pilots.includes(pilot)){
            championship.get(team).set(pilot, points);
            pilots.push(pilot);
        } else if (championship.get(team).has(pilot)){
            championship.get(team).set(pilot, championship.get(team).get(pilot) + points);
        }
    }

    let sortedChampionship = new Map([...championship.entries()]
        .sort((a,b) => {
           let pointsA = Array.from(a[1].values()).reduce((p1,p2) => p1 + p2);
           let pointsB = Array.from(b[1].values()).reduce((p1,p2) => p1 + p2);
           return pointsB - pointsA;
        }));
    let counter = 1;
    for (let [team, pilots] of sortedChampionship) {
        if (counter > 3){
            break;
        }
        let totalPoints = Array.from(pilots.values()).reduce((p1,p2) => p1 + p2);
        console.log(`${team}: ${totalPoints}`);
        let sortedPilots = new Map([...pilots.entries()]
            .sort((a,b) => b[1] - a[1]));
        for (let [sortedPilot, points] of sortedPilots) {
            console.log(`-- ${sortedPilot} -> ${points}`);
        }
        counter++;
    }
}

f1Championship(["Ferrari -> Kimi Raikonnen -> 25",
                "Ferrari -> Sebastian Vettel -> 18",
                "Mercedes -> Lewis Hamilton -> 10",
                "Mercedes -> Valteri Bottas -> 8",
                "Red Bull -> Max Verstapen -> 6",
                "Red Bull -> Daniel Ricciardo -> 4"]);

f1Championship(["Ferrari -> Kimi Raikonnen -> 25",
                "Ferrari -> Sebastian Vettel -> 18",
                "Mercedes -> Lewis Hamilton -> 10",
                "Mercedes -> Valteri Bottas -> 8",
                "Red Bull -> Max Verstapen -> 6",
                "Red Bull -> Daniel Ricciardo -> 4",
                "Mercedes -> Lewis Hamilton -> 25",
                "Mercedes -> Valteri Bottas -> 18",
                "Haas -> Romain Grosjean -> 25",
                "Haas -> Kevin Magnussen -> 25"]);