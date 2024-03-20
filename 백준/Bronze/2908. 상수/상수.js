const fs = require('fs');
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split(" ");
const a = input[0].split("").reverse().join("");
const b = input[1].split("").reverse().join("");
console.log(Math.max(a, b));