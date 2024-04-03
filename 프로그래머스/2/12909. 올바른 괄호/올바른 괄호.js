function solution(s) {
    s = s.split("");
    var count = 0;
    for(let i=0; i<s.length; i++)
    {
        count += s[i] === '(' ? 1 : -1;
        if(count < 0) return false;
    }
    return count === 0 ? true : false;
}

// 1. s.split("")한 뒤, 반복문 돌리기
// 2. s[i] === '(' 이면 a++;
// 3. s[i] === ')' 이면 b++;
// 4. a === b ? return true : return false;