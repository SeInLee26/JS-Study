const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
    for(let i=0; i<input.length; i++)
    {
        const n = Number(input[0]);
        let str = ''
        for(let i = 0 ; i < n; i++) {
        for(let j = 0 ; j <= i; j++) {
            str +='*'
        }
        str +='\n'
    }
    console.log(str);
    }
}).on('close', function () {
    console.log(Number(input[0]));
});