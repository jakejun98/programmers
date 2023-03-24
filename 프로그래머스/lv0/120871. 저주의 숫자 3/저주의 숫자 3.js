function solution(n) {
    let ans = 0;
    
    for(let i = 1; i <= n; i++){
        ans += 1;
        
        while(true){
            if(ans % 3 === 0 || String(ans).includes("3")){
                ans += 1;
                
                continue;
            }
            
            break;
        }
    }
    
    return ans;
}

   // 3의배수 , 3들어가면 ++ 
   // 변환한것도 ++함   for(let j=0;j<n.length ; j++){
   //       if(n.toString().split("")[j]==3){
   //      sum+=1;