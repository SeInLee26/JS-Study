const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const count = parseInt(input)/4;
let str = '';
for(let i=0; i<count; i++)
{
    str += 'long ';
}

console.log(str+'int');