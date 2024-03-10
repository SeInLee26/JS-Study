const input = require('fs').readFileSync('/dev/stdin').toString()
const n = parseInt(input);
for (let i=1; i<=n; i++)
{
let blank = '';
    for(let j=n-i; j>0; j--)
    {
        blank += " ";
    }
    let star = '*'.repeat(i);
    console.log(blank+star);
}