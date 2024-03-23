function solution(phone_number) {
    let arr = [];
    for(let i=0; i<phone_number.length; i++)
    {
        if(i < phone_number.length-4)
            arr += '*'
        else
            arr += phone_number[i]
    }
    return arr;
}