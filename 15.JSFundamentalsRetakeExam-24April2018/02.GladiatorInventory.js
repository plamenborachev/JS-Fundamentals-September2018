function gladiatorInventory(input) {
    let inventory = input.shift().split(/\s+/g);
    for (let line of input) {
        if (line === "Fight!") {
            break;
        }
        let commandTokens = line.split(/\s+/g);
        let command = commandTokens[0];
        let equipment = commandTokens[1];

        switch (command) {
            case "Buy":
                if (!inventory.includes(equipment)){
                    inventory.push(equipment);
                }
                break;
            case "Trash":
                if (inventory.includes(equipment)){
                    let index = inventory.indexOf(equipment);
                    inventory.splice(index, 1);
                }
                break;
            case "Repair":
                if (inventory.includes(equipment)){
                    let index = inventory.indexOf(equipment);
                    inventory.splice(index, 1);
                    inventory.push(equipment);
                }
                break;
            case "Upgrade":
                let upgrade = equipment.split("-").join(":");
                equipment = equipment.split("-")[0];

                if (inventory.includes(equipment)){
                    let index = inventory.indexOf(equipment);
                    inventory.splice(index + 1, 0, upgrade);
                }
                break;
        }
    }
    console.log(inventory.join(" "));
}

gladiatorInventory(["SWORD Shield Spear",
                    "Buy Bag",
                    "Trash Shield",
                    "Repair Spear",
                    "Upgrade SWORD-Steel",
                    "Fight!"]);

gladiatorInventory(["SWORD Shield Spear",
                    "Trash Bow",
                    "Repair Shield",
                    "Upgrade Helmet-V",
                    "Fight!"]);