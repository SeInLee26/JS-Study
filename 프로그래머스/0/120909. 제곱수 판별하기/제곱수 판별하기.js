function solution(n) {
    var answer = 0;
    for(let i=1; i<=Math.sqrt(n); i++)
    {
        if(n === Math.pow(i, 2))
            answer = 1;
        else answer = 2;
    }
    return answer;
}