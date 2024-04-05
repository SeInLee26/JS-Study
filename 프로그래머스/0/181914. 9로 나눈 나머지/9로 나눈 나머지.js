function solution(number) {
    var x = Number(number) % 9;
    let y = 0;
    for(let i=0; i<number.length; i++)
        y += Number(number[i]);
    y %= 9;
    return y;
    // if (x === y)
    //     return x;
    // else -1
}