const fs = require('fs');
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split('\n');
const n = +input[0];
const scores = input[1].split(' ').map(Number);
const max = Math.max(...scores);
let avg = 0;
for(let i=0; i<n; i++)
{
    scores[i] = scores[i]/max*100.0;
    avg += scores[i];
}
console.log(avg/n);