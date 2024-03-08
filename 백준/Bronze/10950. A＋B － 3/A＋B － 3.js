const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const T = parseInt(input[0]);

for (let i=1; i<=T; i++)
{
    let arr = input[i].split(' ');
    console.log(parseInt(arr[0])+parseInt(arr[1]));
}   