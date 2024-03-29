function solution(t, p) {
    var answer = 0;
    var arr = [];
    var numberP = Number(p);
    for(let i=0; i<t.length - p.length + 1; i++)
    {
        arr[i] = t.slice(i, i+p.length);
        if(Number(arr[i]) <= Number(p))
            answer+=1;
    }
    return answer;
}