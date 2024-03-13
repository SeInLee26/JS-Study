const fs = require('fs');
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n").map(Number);

let arr = new Array(31).fill(false);
input.forEach(i => {
    arr[i] = true;
})
for(let i=1; i<=30; i++)
{
    if(!arr[i])
        console.log(i);
}