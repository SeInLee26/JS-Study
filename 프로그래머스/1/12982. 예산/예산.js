function solution(d, budget) {
    var sum = 0, cnt = 0;
    d.sort((a, b) => a-b);
    for(let i=0; sum<=budget; i++)
    {
        if(sum + d[i] <= budget)
        {
            sum += d[i]
            continue;
        }
        return i
    }
}