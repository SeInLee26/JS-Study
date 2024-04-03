function solution(arr, queries) {
    var answer = [];
    var splitArray = []
    for(let i=0; i<queries.length; i++)
    {
        const [s, e, k] = queries[i];
        splitArray[i] = arr.slice(s, e+1).filter(x => x>k);
        if(splitArray[i].length === 0)
            answer.push(-1);
        else {
            const min = Math.min(...splitArray[i]);
            answer.push(min);
        }
    }
    return answer;
}

// 1. arr를 e와 k로 split하여 splitArray로 저장
// 2. splitArray 값들 중, k보다 큰 값만 answer에 push
// 2-1. answer.length가 0이면 -1 리턴
// 3. Math.min(answer)만 리턴