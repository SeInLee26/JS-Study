function solution(numbers) {
    var answer = [];
    for(let i=0; i<numbers.length; i++)
    {
        for(let j=i+1; j<numbers.length; j++)
            answer.push(numbers[j]+numbers[i]);
    }
    let newArr = answer.sort((a, b) => a - b);
    return [...new Set(newArr)];
}

// 1. numbers에서 모든 수를 둘씩 짝지어서 더해서 answer에 넣기
// 2. answer에서 중복 제거하고 오름차순 정렬하기