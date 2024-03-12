const fs = require('fs');
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split("\n");
const arr = input.map(Number);
const max = Math.max(...arr);

for (let i=0; i<arr.length; i++)
{
    if(max === arr[i])
        {
            console.log(arr[i]);
            console.log(i+1);
        }
}