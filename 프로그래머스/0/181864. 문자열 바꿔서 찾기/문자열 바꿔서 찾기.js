function solution(myString, pat) {
    myString = [...myString].map(v => v === 'A' ? 'B' : 'A').join('');
    if(myString.includes(pat))
        return 1;
    else return 0;
}