const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString();
const N = Number(input);

for (let i=1; i<=9; i++)
{
    console.log(`${N} * ${i} = ${N*i}`);
}