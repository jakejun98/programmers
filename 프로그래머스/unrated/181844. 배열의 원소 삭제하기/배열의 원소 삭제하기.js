function solution(arr, delete_list) {
     const newArr = arr.filter(n=>!delete_list.includes(n));
    
    
    return newArr
}