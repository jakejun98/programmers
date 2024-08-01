function solution(common) {
    let count = 0;
    
    // 등차
    if(common[1]-common[0] == common[2]-common[1]){
        return common[common.length-1] + common[1]-common[0]
    }else{
        return common[common.length-1] * common[1]/common[0]
    }
    
}