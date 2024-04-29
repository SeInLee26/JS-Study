function solution(num_list) {
    var sum1 = 0, sum2 = 0;
    for(let i=0; i<num_list.length; i++)
    {
        if(i%2===0)
            sum1 += num_list[i];
        else sum2 += num_list[i];
    }
    return sum1 > sum2 ? sum1 : sum2;
}