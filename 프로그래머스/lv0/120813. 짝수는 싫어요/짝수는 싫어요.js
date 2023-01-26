function solution(n) {
    var answer = [];   
    for(let i=0 ; i<=n ; i++ ){        
        if(i%2==0){ 
            continue;            
         }else answer [i-1] = i;      
    }
    answer  = answer.filter(function(item) {
  return item !== null && item !== undefined && item !== '';
});
    return answer;
} 