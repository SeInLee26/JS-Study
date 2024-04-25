function solution(num_list) {
    if(num_list.length >= 11)
        return num_list.reduce((a,b) => a+b, 0);
    else if(num_list.length <= 10)
        return num_list.reduce((a,b) => a*b, 1);
    return answer
}