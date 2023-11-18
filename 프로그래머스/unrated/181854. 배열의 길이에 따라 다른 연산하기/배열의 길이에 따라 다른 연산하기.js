function solution(arr, n) {
    
    if(arr.length%2==1){
        for(let i=0;i<arr.length;i= i+2){
            arr[i]= arr[i] + n
        }
    }else{
        for(let j=1;j<arr.length;j= j+2){
            arr[j] = arr[j] + n
        }
    }
    
    return arr
}