function solution(s1, s2) {
    var answer = 0;
    let arr_length = Math.max(s1.length, s2.length);
    for(let i=0; i<arr_length; i++)
    {
        if(s1.includes(s2[i]))
            answer++;
    }
    return answer;
}