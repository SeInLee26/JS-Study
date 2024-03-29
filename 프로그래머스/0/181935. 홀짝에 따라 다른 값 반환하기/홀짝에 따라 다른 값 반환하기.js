function solution(n) {
    if(n % 2 == 0) return even(n)
    else return odd(n);
}

function odd(n) {
    let sum = 0
    for(let i=1; i<=n; i+=2)
        sum += i
    return sum;
}

function even(n) {
    let sum = 0;
    for(let i=2; i<=n; i+=2)
        sum += Math.pow(i, 2);
    return sum;
}