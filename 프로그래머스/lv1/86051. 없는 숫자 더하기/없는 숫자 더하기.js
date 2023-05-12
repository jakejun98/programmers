function solution(numbers) {
     let newArray=[0,1,2,3,4,5,6,7,8,9] ;
   
     newArray = newArray.filter((v) => !numbers.includes(v))
    
     return newArray.reduce((a,b) => (a+b))
           
           
    
    
}