function solution(n, numlist) {
    var answer = [];
    
    for(let i=0 ; i<numlist.length ; i++){
        if(numlist[i]%n==0){
            answer[i] = numlist[i] ;
        }
        
    }
    
    return answer.filter((element) => {
  return element !== undefined && element !== null;
});

}