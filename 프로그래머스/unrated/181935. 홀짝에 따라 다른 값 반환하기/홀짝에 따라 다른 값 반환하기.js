function solution(n) {
    let sum = 0 ;
    
    if(n%2==1){
        for(let i=1;i<=n;i=i+2){
            sum = sum + i;
        }
    }else{
        for(let j=0;j<=n;j=j+2){
            sum = sum + (j*j);
        }
    }
    
    return sum
}