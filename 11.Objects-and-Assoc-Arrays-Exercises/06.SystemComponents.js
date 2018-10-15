function solve(input) {
    let systems = new Map();
    let systemInfo = input.map(i => i.split(" | "));

    for (let systemInfoElement of systemInfo) {
        let systemName = systemInfoElement[0];
        let componentName = systemInfoElement[1];
        let subcomponentName = systemInfoElement[2];

        if (!systems.has(systemName)) {
            systems.set(systemName, new Map());
        }
        if (!systems.get(systemName).has(componentName)) {
            systems.get(systemName).set(componentName, []);
        }
        systems.get(systemName).get(componentName).push(subcomponentName);
    }

    let sortedSystems = new Map([...systems.entries()]
        .sort((a,b) => b[1].size - a[1].size || a[0].localeCompare(b[0])));

    for (let [system, components] of sortedSystems) {
        console.log(system);
        let sortedComponents = new Map([...components.entries()].sort((a,b) => b[1].length - a[1].length));
        for (let [sortedComponent, subcomponents] of sortedComponents) {
            console.log("|||" + sortedComponent);
            for (let subComponent of subcomponents) {
                console.log("||||||" + subComponent);
            }
        }
    }
}

solve(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']);