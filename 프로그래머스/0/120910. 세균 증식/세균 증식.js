function solution(n, t) {
    var answer = n;
    for(let i=1; i<=t; i++)
        answer = Math.pow(2, i) * n
    return answer;
}