function solution(sides) {
    var answer = 0;
    sides.sort((a, b) => a - b);
    var x = Math.max(...sides);
    if(sides[0] + sides[1] > sides[2])
        return 1;
    else return 2;
}