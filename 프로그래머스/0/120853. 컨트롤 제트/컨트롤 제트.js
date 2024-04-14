function solution(s) {
    var answer = 0;
    var newArr = s.split(" ");
    for(let i=0; i<newArr.length; i++)
    {
        if(newArr[i] !== 'Z')
            answer += Number(newArr[i]);
        else 
            answer-=Number(newArr[i-1])
    }
    return answer;
}