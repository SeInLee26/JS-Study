function solution(a, b) {
    var answer = Number(String(a) + String(b));
    return answer > (2*a*b) ? answer : 2*a*b;
}