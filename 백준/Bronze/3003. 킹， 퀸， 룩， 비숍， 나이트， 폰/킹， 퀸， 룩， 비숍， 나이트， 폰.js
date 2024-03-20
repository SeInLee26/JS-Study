const fs = require('fs');
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split(" ");
const arr = [1, 1, 2, 2, 2, 8];
let result = ''
for(let i=0; i<input.length; i++)
{
    result += (arr[i]-input[i]) + ' ';
}
console.log(result.trim());