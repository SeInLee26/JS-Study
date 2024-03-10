const input = require('fs').readFileSync('/dev/stdin').toString();

const t = Number(input);
let star = '';
for (let i=1; i<=t; i++)
{
    for(let j=0; j<i; j++)
        star += '*';
    star += '\n';
}
console.log(star);