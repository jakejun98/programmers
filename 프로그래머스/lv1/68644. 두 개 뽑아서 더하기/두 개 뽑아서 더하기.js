function solution(numbers) {
    const result = []
    const result3=[]
    for(let i=0;i<numbers.length;i++){
        
        
        
            
        for(let j=1;j<numbers.length;j++){
        
        if(i!=j){
            result.push([numbers[i],numbers[j]])
        }else continue 
            
       }    
    }
   /*const result2= result.filter(([a, b]) => a != b) */
   
   for(let k=0;k<result.length;k++){
       result3.push(result[k][0]+result[k][1])
   }
       
    
    
    return [...new Set(result3)].sort((a,b)=>a-b)
}

// return [...new Set(result)].sort((a,b)=>a-b)