function solution(array, commands) {
    var answer = [];
    for(let i = 0; i<commands.length; i++)
    {
        let newArray = array.slice(commands[i][0]-1, commands[i][1]);
        newArray = newArray.sort((a, b) => a-b);
        answer.push(newArray[commands[i][2] - 1]);
    }
    return answer;
}

// 1. commands[x]에서 [i, j, k] 찾기
// 2. commands.length만큼 반복문 -> newArray = array.slice(commands[i][0]-1, commands[i][1])
// 3. newArray 오름차순 정렬
// 4. answer.push(newArray[commands[i][2]])