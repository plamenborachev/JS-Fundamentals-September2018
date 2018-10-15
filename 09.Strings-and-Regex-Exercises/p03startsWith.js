function solve(str, subStr) {
    console.log(str.startsWith(subStr));
}

solve('How have you been?', 'how');
solve('The quick brown fox…',
    'The quick brown fox…'
);
solve('Marketing Fundamentals, starting 19/10/2016',
    'Marketing Fundamentals, sta'
);