function solution(ingredient) {
    let count  = 0 ;
    for(let i=0;i<=ingredient.length-4;i++){
        
        if(ingredient[i]==1){
         const newSlice  =  ingredient.slice(i,i+4)
         
         if(newSlice.join("")=='1231'){
             ingredient.splice(i,4)
             count++;
              i -= 4
         }
        }
        
    }
    
    return count 
}