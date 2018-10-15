function solve(sentence, word) {
    let regex = new RegExp(`\\b${word}\\b`, 'ig');
    let matches = sentence.match(regex);
    if (matches){
        console.log(matches.length);
    } else {
        console.log(0);
    }
}

solve('The waterfall was so high, that the child couldn’t see its peak.', 'the');
solve('How do you plan on achieving that? How? How can you even think of that?', 'how');
solve('There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 'there');