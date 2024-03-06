const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const numbers = input.map(value => +value);
// +value : value라는 문자열을 숫자로 반환한 것
// 정수값을 받아 문자열로 변환하여 스페이스로 쪼갠 후, 문자열을 다시 숫자로 변환

const [a, b, c] = numbers.sort((a, b) => b-a);
// 내림차순으로 정렬

if(a === b && b === c && c === a)
console.log(10000 + a*1000);
else if(a===b || b===c)
console.log(1000 + (a===b? a:c)*100);
else
console.log(a*100);