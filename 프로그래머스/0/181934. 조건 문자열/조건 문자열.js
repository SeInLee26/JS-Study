function solution(ineq, eq, n, m) {
    var answer = 0;
    if(ineq == '>' && eq == '=')
    {
        if(n >= m) return 1;
        else return 0;
    }
    else if(ineq == '<' && eq == '=')
    {
        if(n <= m) return 1;
        else return 0;
    }
    else if(ineq == '>' && eq == '!')
    {
        if(n > m) return 1;
        else return 0;
    }
    else if(ineq == '<' && eq == '!')
    {
        if(n < m) return 1;
        else return 0;
    }
}