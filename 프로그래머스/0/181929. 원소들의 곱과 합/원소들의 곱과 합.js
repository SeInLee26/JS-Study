function solution(num_list) {
    var answer1 = 1, answer2 = 0;
    for(let i=0; i<num_list.length; i++)
    {
        answer1 *= num_list[i];
        answer2 += num_list[i];
    }
    if(answer1 < answer2**2) return 1;
    else return 0;
}