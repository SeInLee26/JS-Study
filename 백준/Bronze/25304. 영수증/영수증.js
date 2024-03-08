const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

x = parseInt(input[0]);
n = parseInt(input[1]);

let sum = 0;

for(let i=2; i<=n+1; i++)
{
    let a = (input[i].split(" ")[0]);
    let b = (input[i].split(" ")[1]);
    sum += a * b;
}
sum === x ? console.log("Yes") : console.log("No");