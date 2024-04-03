function solution(numbers, direction) {
    if(direction === "right")
    {
        let answer = numbers.splice(0, numbers.length-1);
        return [...numbers, ...answer]
    }
    else {
        let answer = numbers.splice(1, numbers.length-1);
        return [...answer, ...numbers];
    }
    return numbers;
}