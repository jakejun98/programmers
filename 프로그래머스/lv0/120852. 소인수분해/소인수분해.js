function solution(n) {
    const smallNumber = [];
    let sex = 2 ; 
    
    
    while(n!==1){
        if(n%sex === 0){
            smallNumber.push(sex);
            n/=sex ;
            sex=2;
        }else {
            sex +=1;
        }
    }return Array.from(new Set(smallNumber));
} 