function solution(x) {
    var answer = true;
    var arr = String(x).split("")
    let i=0, sum = 0;
    for (let i=0; i<arr.length; i++)
    {
        sum += Number(arr[i]);
    }
    if(x % sum === 0) return true;
    else return false;
}