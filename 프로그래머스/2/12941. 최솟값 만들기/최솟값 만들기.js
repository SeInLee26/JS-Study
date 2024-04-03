function solution(A,B){
    var answer = 0;
    A = A.sort((x, y) => x - y);
    B = B.sort((x, y) => y - x);
    for(let i=0; i<A.length; i++)
        answer += A[i]*B[i];
    return answer;
}

// 1. a배열, b배열을 각각 오름차순, 내림차순으로 정렬한 뒤 a[i]*b[i] 더하기