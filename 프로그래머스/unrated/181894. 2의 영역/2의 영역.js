function solution(arr) {
    
    const newArray = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]==2){
            newArray.push(i)
            console.log(newArray[newArray.length-1])
        }
    }
    if(newArray.length==1){
        return arr.slice(newArray[0],newArray[0]+1)
    }
    if(newArray.length==0){
        newArray.push(-1)
        return newArray
    }
    if(newArray.length>=2){
        return arr.slice(newArray[0],newArray[newArray.length-1]+1)
    }
}