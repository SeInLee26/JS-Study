function solution(emergency) {
    var answer = [];
    let arr = [...emergency].sort((a, b) => b-a);
    answer = emergency.map(v => arr.indexOf(v)+1);
    return answer;
}