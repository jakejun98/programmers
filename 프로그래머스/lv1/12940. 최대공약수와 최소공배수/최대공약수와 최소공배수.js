function solution(n, m) {
    let ged = 1
    let gcd = 1
    const newArray = []
    for(let i=2 ;i<=Math.min(n,m);i++){
       if(n%i==0 && m%i==0){
           ged=i
       }
    }
    
    
    
    while(true){
      if((gcd % n == 0) && (gcd % m == 0)){
        break;
      }
      gcd++;
    }
    
        return [ged,gcd]
    }