const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
let H = +input[0];
let M = +input[1];

if (M<45)
{
    if(H === 0)
        console.log(H+23, M-45+60);
    else
        console.log(H-1, M-45+60);
}
else 
{
    console.log(H, M-45);
}