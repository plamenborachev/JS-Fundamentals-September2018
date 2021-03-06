function solve(input) {
    let nameRegex = /\*[A-Z][a-zA-Z]*(?= |\t|$)/g;
    let phoneRegex = /\+[0-9-]{10}(?= |\t|$)/g;
    let idRegex = /![a-zA-Z0-9]+(?= |\t|$)/g;
    let baseRegex = /_[a-zA-Z0-9]+(?= |\t|$)/g;

    function replaceSecretData(inputArr, regex) {
        for (let i = 0; i < inputArr.length; i++) {
            inputArr[i] = inputArr[i].replace(regex, m => "|".repeat(m.length));
        }
        return inputArr;
    }

    replaceSecretData(input, nameRegex);
    replaceSecretData(input, phoneRegex);
    replaceSecretData(input, idRegex);
    replaceSecretData(input, baseRegex);

    console.log(input.join("\n"));
}

solve(['Agent *Ivankov was in the room when it all happened.',
    'The person in the room was heavily armed.',
    'Agent *Ivankov had to act quick in order.',
    'He picked up his phone and called some unknown number.']
);

solve(['I think it was +555-49-796',
    'I can\'t really remember...',
    'He said something about "finishing work"',
    'with subject !2491a23BVB34Q and returning to Base _Aurora21',
    'Then after that he disappeared from my sight.',
    'As if he vanished in the shadows.',
    'A moment, shorter than a second, later, I saw the person flying off the top floor.',
    'I really don\'t know what happened there.',
    'This is all I saw, that night.',
    'I cannot explain it myself...']);