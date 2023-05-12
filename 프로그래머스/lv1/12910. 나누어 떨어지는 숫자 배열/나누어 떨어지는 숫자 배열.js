function solution(arr, divisor) {
    const newArray = []
    for(let i=0;i<arr.length;i++){
        if(arr[i]%divisor==0){
            newArray.push(arr[i])
        }
    }
    if(newArray.length==0){
        return [-1]
    }else return newArray.sort((a,b) =>a-b )
}