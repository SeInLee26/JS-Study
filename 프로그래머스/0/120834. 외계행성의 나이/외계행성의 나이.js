function solution(age) {
    var arr = age.toString().split("");
    var answer = '';
    for(let i=0; i<arr.length; i++)
    {
        answer += String.fromCharCode(Number(arr[i])+97);
    }
    return answer;
}