function solution(left, right) {
    var answer = 0;
    for(let i=left; i<=right; i++)
    {
        if(Number.isInteger(Math.sqrt(i)))
            answer -= i;
        else answer += i;
    }
    return answer;
}
// 1. 제곱근이 존재하면 약수의 갯수는 짝수, 아니면 홀수 