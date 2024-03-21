function solution(k, m, score) {
    let answer = 0;
    score.sort((a, b)=> b-a)
    for(var i=0; i<score.length; i+=m) {
        let values = score.slice(i, i+m)
        if(values.length == m) 
        {
            answer += values[values.length-1]*m
        }
    }

    return answer;
}