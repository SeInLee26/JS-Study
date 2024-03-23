function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    let numer = numer1*denom2+numer2*denom1;
    let denom = denom1 * denom2;
    let gcd = (a, b) => (b > 0 ? gcd(b, a%b) : a);
    let min = gcd(numer, denom);
    answer[0] = numer / min;
    answer[1] = denom / min;
    return answer
}