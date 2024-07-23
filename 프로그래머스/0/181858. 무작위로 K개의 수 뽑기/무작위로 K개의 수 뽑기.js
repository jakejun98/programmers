function solution(arr, k) {
    let result = [];
    
    const uniqueArr = arr.filter((el, index) => arr.indexOf(el) === index);
    
    if(uniqueArr.length === k){
        return uniqueArr
    }
    if(uniqueArr.length > k){
        for(let i=0;i<uniqueArr.length;i++){
            if(result.length<k){
                result.push(uniqueArr[i])
                
            }
        }return result
    }
    
    if(uniqueArr.length<k){
        for(let j=0;j<uniqueArr.length;j++){
            uniqueArr.push(-1)
            if(uniqueArr.length === k){
                return uniqueArr
            }
        }
    }
}