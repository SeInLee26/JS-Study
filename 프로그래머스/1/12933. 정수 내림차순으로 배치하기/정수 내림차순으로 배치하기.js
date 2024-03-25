function solution(n) {
    var answer = 0;
    let arr = String(n).split("")
    arr = arr.sort((a, b) => b - a).join("");
    return Number(arr);
}