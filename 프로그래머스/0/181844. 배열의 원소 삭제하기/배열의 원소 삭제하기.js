function solution(arr, delete_list) {
    for(let i=0; i<arr.length; i++)
    {
        if(delete_list.includes(arr[i]))
        {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}