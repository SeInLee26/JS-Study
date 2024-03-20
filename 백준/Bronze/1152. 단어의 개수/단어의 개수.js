const fs = require('fs');
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().trim().split(" ");
let count = 0;
for(let i=0; i<input.length; i++)
{
    if(input[i] !== "")
        count++;
}
console.log(count);