function solution(a, b) {
    var answer1 = 0, answer2 = 0;
    answer1 = Number(String(a) + String(b));
    answer2 = Number(String(b) + String(a));
    return answer1 > answer2 ? answer1 : answer2;
}