const fs = require('fs');
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split("\n");

let [n, x] = input[0].split(' ').map(Number);
let numbers = input[1].split(' ');
let answer = '';

for (let i=0; i<numbers.length; i++)
{
    if(numbers[i]<x)
        answer += numbers[i] + ' ';
}
console.log(answer);