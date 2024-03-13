const fs = require('fs');
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split("\n");
const [n, m] = input[0].split(' ').map(Number);
let balls = new Array(n).fill(0).map((_, index) => index + 1);
let temp = 0;
for(let i=1; i<=m; i++)
{
    const [a, b] = input[i].split(' ').map(Number);
    [balls[a - 1], balls[b - 1]] = [balls[b - 1], balls[a - 1]];
}

console.log(balls.join(' '));
