function solution(n) {
    var answer = String(n).split("");
    var result = 0;
    for(let i=0; i<answer.length; i++)
        result += Number(answer[i])
    return result
}