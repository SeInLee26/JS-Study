function solution(array) {
    var answer = 0;
    let count = [];
    let max = 0, x = 0;
    const newArray = [...new Set(array)]; // array의 중복값을 제거
    if (array.length === 1)
        return array[0]; // 테스트 케이스 3) 
    else
    {
        for(let i=0; i<newArray.length; i++) {
            count.push(array.filter(a => a == newArray[i]).length);
            // array와 newArray 비교하여 같으면 newArray의 원소별 빈도수 체크
        }
        max = Math.max(...count); // 빈도수 배열 count에서 최댓값 출력
        x = count.filter(n => n == max); 
        if(x.length > 1)
            answer = -1
        else if (x.length === 1) answer = newArray[count.indexOf(max)];
    }
    return answer;
}