const letters = ['F', 'e', 'l', 'i', 'p', 'e'];

// Adds another p then replace last e by i
letters.splice(4, 0, 'p')
letters.splice(6, 1, 'i')

console.log(letters);