function solve(input) {
    let regex = /^([!@#$?a-z]+)=(\d+)--(\d+)<<([a-z]+)$/;
    let entries = new Map();

    for (let line of input) {
        if (line === "Stop!"){
            break;
        }
        let match = regex.exec(line);
        if (match){
            let name = match[1].replace(/[!@#$?]+/g, "");
            let nameLength = +match[2];
            let genesCount = +match[3];
            let organism = match[4];
            if (name.length === nameLength){
                if (!entries.has(organism)){
                    entries.set(organism, 0);
                }
                entries.set(organism, entries.get(organism) + genesCount);
            }
        }
    }
    let sortedEntries = new Map([...entries.entries()]
        .sort((a,b) => b[1] - a[1]));
    for (let [organism, genes] of sortedEntries) {
        console.log(`${organism} has genome size of ${genes}`);
    }
}

solve(["!@ab?si?di!a@=7--152<<human",
"b!etu?la@=6--321<<dog",
"!curtob@acter##ium$=14--230<<dog",
"!some@thin@g##=9<<human",
"Stop!"]);

solve(["=12<<cat",
"!vi@rus?=2--142",
"?!cur##viba@cter!!=11--800<<cat",
"!fre?esia#=7--450<<mouse",
"@pa!rcuba@cteria$=13--351<<mouse",
"!richel#ia??=8--900<<human",
"Stop!"]);

solve(["!@ру?би#=4--57<<polecat",
    "?do?@#ri#=4--89<<polecat",
    "=12<<cat",
    "!vi@rus?=2--142",
    "@pa!rcu>ba@cteria$=13--234<<mouse",
     "?!cur##viba@cter!!=11--680<<cat",
    "Stop!"]);

