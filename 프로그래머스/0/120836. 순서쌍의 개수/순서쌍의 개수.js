function solution(n) {
    var answer = 0;
    var arr = [];
    for(let i=0; i<=n; i++)
    {
        if(n % i === 0)
        {
            arr.push(i);
            answer++;
        }
    }
    return answer;
}