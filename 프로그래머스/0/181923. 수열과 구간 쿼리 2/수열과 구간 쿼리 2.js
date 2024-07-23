function solution(arr, queries) {
    let answer = [];
     
    for(let i=0 ; i<queries.length;i++){
        const newArr = arr.slice(queries[i][0],queries[i][1]+1)
        let count = 0
        

        const newAnswer = [...newArr].sort((a, b) => a - b);
       
       
        
        for(let j=0 ; j<newArr.length;j++){
            
            
            if(newAnswer[j]>queries[i][2]){
                answer.push(newAnswer[j]); 
                count++;
                break;
                
            }
            
          
        }
        if(count==0){
            answer.push(-1)
        }
        
       
       
    }
    return answer
    
}