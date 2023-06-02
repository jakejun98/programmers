function solution(k, score) {
    const dang =[];
    const dangdang = [];
    for(let i=0;i<score.length;i++){  
      if(i<k){
        dang.push(score[i])
      dang.sort((a,b)=>a-b)
      dangdang.push(dang[0])
      } 
        
      if(i>=k){
          
          for(let j=0;j<dang.length;j++){
              if(dang[j]>score[i]){
                  dangdang.push(dang[0])
                  break;
              }
              if(dang[j]<=score[i]){
                  if(j=0){
                      continue;
                  }else
                  dang.shift();
                  dang.push(score[i])
                  dang.sort((a,b)=>a-b)
                  dangdang.push(dang[0])
                 break;
                  
              }
          }
      }
                        

    } 
    
    return dangdang
}