function solution(arr) {
    let newArray = [];
    let i=0;
    
    while(i<arr.length){
    
        if(newArray.length == 0){
            newArray.push(arr[i])
            i++
        }else if(newArray.length > 0 && 
           newArray[newArray.length-1]==arr[i]){
           newArray.pop() 
           i++ 
        }else if(newArray.length > 0 && 
           newArray[newArray.length-1]!=arr[i]){
           newArray.push(arr[i]) 
           i++ 
        }
        
        
        
        
    }
    
    
    if(newArray.length>0){
        return newArray
    }else return [-1]
    
    
     
    
    
    
}