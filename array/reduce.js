const letters = ['F', 'e', 'l', 'i', 'p', 'e'];

const word = letters.reduce(
    (word, letter) => word + letter,
    ''
);

console.log(word);