function solution(intStrs, k, s, l) {
    const answer = [];
    
    for(let i=0;i<intStrs.length;i++){
        let slicedStr = intStrs[i].split("").splice(s,l).join("")
        if(slicedStr>k){
            answer.push(Number(slicedStr))
        }
        
    }
    
    return answer
}