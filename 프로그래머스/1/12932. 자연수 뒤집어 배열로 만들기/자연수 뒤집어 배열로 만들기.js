function solution(n) {
  let answer = [];
  var arr = n.toString().split('');
  for (let i = arr.length - 1; i >= 0; i--) {
    answer.push(Number(arr[i]));
  }
  return answer;
}