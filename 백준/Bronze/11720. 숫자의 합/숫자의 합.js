const fs = require('fs');
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split("\n");
const n = parseInt(input[0]);
const numbers = input[1].split('').map(Number);
let sum = 0;
for(let i=0; i<n; i++)
{
    sum += numbers[i];
}
console.log(sum);