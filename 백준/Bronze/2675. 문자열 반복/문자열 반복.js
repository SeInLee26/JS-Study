const fs = require('fs');
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split('\n');
const t = Number(input[0]);
for (let i=1; i<=t; i++)
{
    const r = Number(input[i].split(" ")[0]);
    const s = input[i].split(" ")[1];
    let p = [];
    for(let j=0; j<s.length; j++)
    {
        for(let k=0; k<r; k++)
            p.push(s[j]);
    }
    console.log(p.join(''));
}