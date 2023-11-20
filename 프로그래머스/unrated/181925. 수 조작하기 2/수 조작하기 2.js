function solution(numLog) {
    const answer= [];
    for(let i=0;i<numLog.length;i++){
        if(numLog[i+1]-numLog[i]==1){
            answer.push('w')
        }
        if(numLog[i+1]-numLog[i]==-1){
            answer.push('s')
        }
        if(numLog[i+1]-numLog[i]==10){
            answer.push('d')
        }
        if(numLog[i+1]-numLog[i]==-10){
            answer.push('a')
        }
    }
    return answer.join("")
}