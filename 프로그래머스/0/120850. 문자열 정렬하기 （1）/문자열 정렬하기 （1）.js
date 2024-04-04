function solution(my_string) {
    var answer = [...my_string].filter((v) => !isNaN(v)).map(x => parseInt(x));
    answer.sort((a, b) => a - b);
    return answer;
}