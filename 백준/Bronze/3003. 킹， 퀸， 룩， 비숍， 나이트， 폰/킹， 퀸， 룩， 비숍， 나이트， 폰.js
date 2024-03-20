const fs = require('fs');
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split(" ");
const arr = [1, 1, 2, 2, 2, 8];
let newArr = [];
for(let i=0; i<input.length; i++)
{
    newArr.push(Number(arr[i]) - Number(input[i]));
}
console.log(newArr.join(" "));