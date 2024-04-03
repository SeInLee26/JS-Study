function solution(balls, share) {
    let answer = 0;
    answer = Math.round(factorial(balls) / (factorial(balls-share) * factorial(share)));
    return answer;
}

function factorial(n) {
    let x = 1;
    for(let i=n; i>0; i--)
        x *= i;
    return x;
}

// 순열 balls! / (balls-share)! * share!
// = {balls * (balls-1) * ... * (balls-share+1)} / (balls-share)!;
// 5P3 = (5*4)/(5-3) = 10
// 3P2 = 3
// 6P3 = (6*5*4)/(6-3) = 80 / 3