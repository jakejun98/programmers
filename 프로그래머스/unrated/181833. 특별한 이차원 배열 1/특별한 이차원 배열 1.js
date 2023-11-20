function solution(n) {
    const answer = [];

   
    
    for(let i=0;i<n;i++){
        const answer2 = []
       for(let k=0;k<n;k++){
        answer2.push(0)
    }
        answer.push([...answer2])
        
   }
    const answer3 = [...answer];
    for(let j=0;j<n;j++){
        answer3[j].splice(j,1,1)
    }
    return answer3
}