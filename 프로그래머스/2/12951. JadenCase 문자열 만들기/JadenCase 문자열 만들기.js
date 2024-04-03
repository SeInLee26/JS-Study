function solution(s) {
    var answer = s.split(" ").map(x => {
        return x.trim().slice(0, 1).toUpperCase() + x.slice(1).toLowerCase();
    });
    return answer.join(" ");
}

// 1. s를 공백으로 분리
// 2. 매개변수 x를 사용하여 x[0]은 대문자로, x[1] 이후는 소문자로 변환
// 3. x들을 공백 포함하여 join