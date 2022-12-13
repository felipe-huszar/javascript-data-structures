const numbers = [2, 6, 7, 9, 11, 12];
const divisableByTwo = numbers.filter(number => number%2 === 0);

for(const divisableNumber of divisableByTwo) {
    console.log(`${divisableNumber} is divisable by two`);
}