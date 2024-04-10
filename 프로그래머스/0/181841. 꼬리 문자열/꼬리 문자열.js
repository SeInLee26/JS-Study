function solution(str_list, ex) {
    var answer = '';
    for(let i=0; i<str_list.length; i++)
    {
        if(!str_list[i].includes(ex))
            answer += str_list[i];
    }
    return answer;
}

// 1. for문 돌리면서 str_list[i]가 ek를 포함하고 있는지 확인 (includes 함수 사용)
// 2. ek 포함한 indexOf 제외한 str_list 출력