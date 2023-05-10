function solution(a, b) {
    let sum=0;
    if(a>b){
        for(let i=b; i<=a ; i++){
            sum=sum+i
        }
    }
    if(a==b){
        sum=a
        }
    
    if(a<b){
        for(let i=a; i<=b ; i++){
            sum=sum+i
        }
    } 
    
    
    
    
    
    
    return sum
}