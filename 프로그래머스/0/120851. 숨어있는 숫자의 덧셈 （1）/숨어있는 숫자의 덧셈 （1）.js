function solution(my_string) {
    my_string = my_string.split("");
    var result = 0;
    for(let i=0; i<my_string.length; i++)
    {
        if(Number(my_string[i]))
            result += Number(my_string[i])
    }
    return result;
}