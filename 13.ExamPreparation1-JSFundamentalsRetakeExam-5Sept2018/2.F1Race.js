function solve(input) {
    let pilots = input[0].split(/\s+/g);

    for (let i = 1; i < input.length; i++) {
        let actionTokens = input[i].split(/\s+/g);
        let action = actionTokens[0];
        let pilot = actionTokens[1];

        switch (action) {
            case "Join":
                if (!pilots.includes(pilot)){
                    pilots.push(pilot);
                }
                break;
            case "Crash":
                if (pilots.includes(pilot)){
                    let indexOfPilot = pilots.indexOf(pilot);
                    pilots.splice(indexOfPilot, 1);
                }
                break;
            case "Pit":
                if (pilots.includes(pilot)){
                    let indexOfPilot = pilots.indexOf(pilot);
                    if (indexOfPilot !== pilots.length - 1) {
                        let nextPilot = pilots[indexOfPilot + 1];
                        pilots[indexOfPilot + 1] = pilot;
                        pilots[indexOfPilot] = nextPilot;
                    }
                }
                break;
            case "Overtake":
                if (pilots.includes(pilot)){
                    let indexOfPilot = pilots.indexOf(pilot);
                    if (indexOfPilot > 0){
                        let prevPilot = pilots[indexOfPilot - 1];
                        pilots[indexOfPilot - 1] = pilot;
                        pilots[indexOfPilot] = prevPilot;
                    }
                }
                break;
        }
    }
    console.log(pilots.join(" ~ "));
}

solve(["Vetel Hamilton Slavi",
    "Pit Hamilton",
    "Overtake Vetel",
    "Crash Slavi"]);

solve(["Vetel Hamilton Raikonnen Botas Slavi",
    "Pit Hamilton",
    "Overtake LeClerc",
    "Join Ricardo",
    "Crash Botas",
    "Overtake Ricardo",
    "Overtake Ricardo",
    "Overtake Ricardo",
    "Crash Slavi"]);