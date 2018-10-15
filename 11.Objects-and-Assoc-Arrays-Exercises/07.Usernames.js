function solve(input) {
    let userNames = new Set();
    input.forEach(i => userNames.add(i));
    Array.from(userNames)
        .sort((a,b) => a.length - b.length || a.localeCompare(b))
        .forEach(u => console.log(u));
}

solve(['Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston']
);

solve(['Denise', 'Ignatius', 'Iris', 'Isacc', 'Indie', 'Dean', 'Donatello', 'Enfuego', 'Benjamin', 'Biser', 'Bounty', 'Renard', 'Rot']);