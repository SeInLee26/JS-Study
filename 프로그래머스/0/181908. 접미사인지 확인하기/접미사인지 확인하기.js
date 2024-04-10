function solution(my_string, is_suffix) {
    var newArr = [];
    for(let i=0; i<my_string.length; i++)
    {
        newArr.push(my_string.slice(i));
    }
    for(let i=0; i<newArr.length; i++)
    {
        if(is_suffix === newArr[i])
            return 1;
    }
    return 0;
}