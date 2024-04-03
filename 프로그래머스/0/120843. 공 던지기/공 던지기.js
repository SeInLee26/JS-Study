function solution(numbers, k) {
    var answer = 0;
    let x = (2*(k-1))%numbers.length;
    return numbers[x];
}