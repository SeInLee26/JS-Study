const fs = require('fs');
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split('\n');
const t = parseInt(input[0]);
for(let i=0; i<t; i++)
{
    const word = input[i+1].trim();
    const firstChar = word.charAt(0);
    const lastChar = word.charAt(word.length-1);
    const str = firstChar+lastChar;
    console.log(str);
}