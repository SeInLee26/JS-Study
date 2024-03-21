const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
var arr = [];
rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    var str = input[0];
    let n = Number(input[1]);
    for(let i=0; i<n; i++)
        arr.push(str);
    console.log(str.repeat(n));
});