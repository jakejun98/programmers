function solution(myStr) {
    const resultArray = myStr.split(/[abc]/);
    const result = [];
    
    for(let i=0;i<resultArray.length;i++){
        if(resultArray[i]!=''){
            result.push(resultArray[i])
        }
    }
    
    if(result.length ==0){
        result.push("EMPTY")
        return result
    }
    return result
}