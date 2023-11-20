function solution(arr) {
    let count = 0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[i][j]===arr[j][i]){
                count++
            }
        }
    }
    
    if(count == arr.length*arr.length){
        return 1
    }else return 0
}