function solution(hp) {
    var answer = 0;
    var arr = [5, 3, 1];
    let a = Math.floor(hp / arr[0]);
    let b = Math.floor((hp-arr[0]*a) / arr[1]);
    let c = hp - (arr[0]*a) - (arr[1]*b)
    return a + b + c;
}
// 1. 장군개미, 병정개미, 일개미 배열로 저장
// 2. hp가 0이 될때까지 장군개미, 병정개미, 일개미 순으로 hp 나누기
// 3. 반복문 끝날때마다 answer++