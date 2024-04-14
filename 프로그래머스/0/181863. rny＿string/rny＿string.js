function solution(rny_string) {
    var str = rny_string.split("");
    for(let i=0; i<str.length; i++)
    {
        if(str[i] === 'm')
            str[i] = 'rn'
    }
    return str.join("");
}