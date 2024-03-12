const fs = require('fs');
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const min = Math.min(...arr);
const max = Math.max(...arr);
console.log(min, max);