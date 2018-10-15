function solve(input) {
    let heroes = input.map((heroTokens) => heroTokens.split(" / "))
        .map((heroInfo) => {
                let heroName = heroInfo[0];
                let heroLevel = +heroInfo[1];
                let heroItems = [];
                if (heroInfo.length > 2){
                    heroItems = heroInfo[2].split(", ");
                }
                return {
                    name : heroName,
                    level : heroLevel,
                    items : heroItems
                }
        });

    console.log(JSON.stringify(heroes));
}

solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);

solve(['Jake / 1000 / Gauss, HolidayGrenade']);