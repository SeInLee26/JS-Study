function solution(my_string) {
    var answer = '';
    var array = ['a', 'e', 'i', 'o', 'u'];
    answer = my_string.split('').filter(v => !array.includes(v)).join('');
    return answer;
}