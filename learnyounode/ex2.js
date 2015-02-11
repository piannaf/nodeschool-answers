function sum (a, b) { return a + b };

console.log(process.argv.slice(2).map(Number).reduce(sum));
