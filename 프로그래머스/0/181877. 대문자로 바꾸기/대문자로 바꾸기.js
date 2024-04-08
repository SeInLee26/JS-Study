function solution(myString) {
    var answer = '';
    for(let i=0; i<myString.length; i++)
    {
        if(myString[i] === myString[i].toLowerCase())
            answer += myString[i].toUpperCase();
        else answer += myString[i].toUpperCase()
    }
    return answer;
}