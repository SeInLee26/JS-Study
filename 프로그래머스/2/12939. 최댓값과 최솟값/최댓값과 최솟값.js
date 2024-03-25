function solution(s) {
    var answer = [];
    const arr = s.split(" ").map(x => +x);
    var max = arr[0];
    var min = arr[1];
    for(let i=0; i<s.length; i++)
    {
        if(arr[i] >= max)
            max = arr[i]
        if(arr[i] <= min)
            min = arr[i];
    }
    answer = `${min} ${max}`
    return answer
}