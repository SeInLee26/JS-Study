const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().split("\n");

let hour = +input[0].split(' ')[0] // 요리 시작 시
let minute = +input[0].split(' ')[1] // 요리 시작 분
let time = +input[1]; // 요리 소요시간

minute = minute + time;

if (minute >= 60)
{
    hour = hour + Math.floor(minute / 60);
    minute = minute % 60;

    if(hour>=24)
        hour -= 24;
}

console.log(hour, minute);