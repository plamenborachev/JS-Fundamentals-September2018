function solve(str, subStr) {
    console.log(str.endsWith(subStr));
}

solve('This sentence ends with fun?',
    'fun?'
);
solve('This is Houston, we have…',
    'We have…'
);
solve('The new iPhone has no headphones jack.',
    'o headphones jack.'
);