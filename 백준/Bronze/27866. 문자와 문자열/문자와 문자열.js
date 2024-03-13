const input = require("fs").readFileSync('dev/stdin').toString().split('\n');
let word = input[0].toString();
let i = Number(input[1]);
console.log(word[i-1]);