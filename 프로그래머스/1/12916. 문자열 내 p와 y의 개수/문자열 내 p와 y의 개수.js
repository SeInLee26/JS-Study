function solution(s){
    var answer = true;
    let countP = 0, countY = 0;
    for(let i=0; i<s.length; i++)
    {
        if(s[i] === 'p' || s[i] === 'P')
            countP++
        else if(s[i] === 'y' || s[i] === 'Y')
            countY++
    }
    return (countP === countY) ? true : false;
}