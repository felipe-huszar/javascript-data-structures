const array = [2, 5, 7];

const square = (x) => x*x;
const squareArray = array.map(square);

for(const squareNumber of squareArray) {
    console.log(squareNumber);
}
