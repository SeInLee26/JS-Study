function solution(a, d, included) {
    var answer = 0;
    var arr = [];
    for(let i=0; i<included.length; i++)
    {
        if(included[i])
            answer += a + i * d;
    }
    return answer;
}