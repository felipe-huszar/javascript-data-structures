const numbers = [1, 2, 3]
const letters = ['a', 'b', 'c']

const numbersAndLetters = numbers.concat(letters);

for(const numberOrLetter of numbersAndLetters) {
    console.log(numberOrLetter);
}