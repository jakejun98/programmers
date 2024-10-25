function solution(n,a,b)
{
    let count = 1;
    let evidence = false;
    
    while(evidence==false){
        if(a>b){
        if(b+1 === a && Math.ceil(a/2)===Math.ceil(b/2)){
            
            return count 
        }else{
            count++;
            a = Math.ceil(a/2);
            b = Math.ceil(b/2);            
        }
    }
        if(a<b){
             if(a+1 === b && Math.ceil(a/2)===Math.ceil(b/2)){
            
            return count 
        }else{
            count++;
            a = Math.ceil(a/2);
            b = Math.ceil(b/2);            
        }
        }
    }
    
}