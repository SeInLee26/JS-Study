function solution(answers) {
    var answer = [];
    var patternA = [1, 2, 3, 4, 5];
    var patternB = [2, 1, 2, 3, 2, 4, 2, 5];
    var patternC = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let score1 = 0;
    let score2 = 0;
    let score3 = 0;
    for(let i=0; i<answers.length; i++)
    {
        if(answers[i]==patternA[i%patternA.length]) score1++;
        if(answers[i]==patternB[i%patternB.length]) score2++;
        if(answers[i]==patternC[i%patternC.length]) score3++;
    }
    const maxScore = Math.max(score1, score2, score3);
    if(score1 === maxScore)
        answer.push(1);
    if(score2 === maxScore)
        answer.push(2);
    if(score3 === maxScore)
        answer.push(3);
    return answer;
}