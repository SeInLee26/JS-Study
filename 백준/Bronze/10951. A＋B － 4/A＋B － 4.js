const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// trim이 무슨 함수인지 기억이 안남 

for(let i=0; i<input.length; i++)
{
    let [num1, num2] = input[i].split(' ');   
    console.log(Number(num1) + Number(num2));
}