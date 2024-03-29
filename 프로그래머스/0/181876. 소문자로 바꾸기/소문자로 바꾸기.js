function solution(myString) {
    var answer = '';
    for(let i=0; i<myString.length; i++)
    {
        answer += myString[i].toLowerCase();
    }
    return answer;
}