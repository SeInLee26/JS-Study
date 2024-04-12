function solution(numbers) {
    var answer = numbers.sort((a, b) => a-b);
    var arr = [];
    for(let i=0; i<numbers.length-1; i++)
        arr.push(numbers[i]*numbers[i+1])
    return Math.max(...arr);
}