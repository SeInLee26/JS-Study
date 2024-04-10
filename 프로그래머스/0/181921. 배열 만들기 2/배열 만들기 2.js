function solution(l, r) {
    const answer = [];
    for (let i = l; i <= r; i++) {
        if (checkZeroFive(i)) {
            answer.push(i);
        }
    }
    return answer.length > 0 ? answer : [-1];
}

function checkZeroFive(num) {
    const strNum = String(num);
    for (let i = 0; i < strNum.length; i++) {
        if (strNum[i] !== '0' && strNum[i] !== '5') {
            return false;
        }
    }
    return true;
}