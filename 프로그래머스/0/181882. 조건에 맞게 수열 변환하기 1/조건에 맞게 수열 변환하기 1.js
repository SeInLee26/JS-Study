function solution(arr) {
    var answer = [];
    answer = arr.map((i) => {
        if(i >= 50 && i % 2 === 0)
            return i/2;
        else if(i < 50 && i % 2 === 1)
            return i*2;
        else 
            return i;
    })
    return answer;
}