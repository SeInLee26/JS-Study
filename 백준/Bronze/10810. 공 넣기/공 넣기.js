const fs = require('fs');
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split("\n");
const [n, m] = input[0].split(' ').map(Number); // n개의 바구니에 m개의 공 넣기
const baskets = new Array(n).fill(0);

for (let i = 1; i <= m; i++) {
    const [start, end, ball] = input[i].split(' ').map(Number);
    for(let j=start-1; j<=end-1; j++)
    {
        baskets[j] = ball;
    }
}
console.log(baskets.join(" "));