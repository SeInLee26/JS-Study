const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
    var arr = '';
    for(let i of line)
    {
        if(i === i.toUpperCase())
            arr += i.toLowerCase();
        else
            arr += i.toUpperCase();
    }
    console.log(arr);
}).on('close',function(){
    str = input[0];
});