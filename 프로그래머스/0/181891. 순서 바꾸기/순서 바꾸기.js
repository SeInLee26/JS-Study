function solution(num_list, n) {
    var arr1 = num_list.slice(n, num_list.length);
    var arr2 = num_list.slice(0, n);
    return arr1.concat(arr2);
}