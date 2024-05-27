function solution(binomial) {
    let answer = 0;
    var [a, op, b] = binomial.split(" ");
    switch(op)
    {
        case '+':
            answer = Number(a) + Number(b);
            break;
        case '-':
            answer = Number(a) - Number(b);
            break;
        case '*':
            answer = Number(a) * Number(b);
            break;
    }
    return answer;
}