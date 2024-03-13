let input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');
let string = input[0];
console.log(string.charCodeAt(string.length -1 ));