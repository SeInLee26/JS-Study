function solution(my_string, alp) {
    var answer = [...my_string].map(e => e === alp ? e.toUpperCase() : e).join("")
    return answer;
}