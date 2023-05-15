function solution(left, right) {
    let answer = 0;
    
    for(let i=left ; i<=right ; i++){
        let index =0 ;
        
        for(let j=1 ; j<=i ; j++){
            if(i%j==0){
                index++
            }        
          }
       
        
        if(index%2==0){
                answer = answer + i
            }else{ answer = answer -i
                 }
    }
    return answer
}