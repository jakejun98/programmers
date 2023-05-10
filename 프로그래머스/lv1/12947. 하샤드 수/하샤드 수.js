function solution(x) {
    let sum = 0;
    let xx = x+""
    for(let i=0;i<xx.length ; i++){
        sum=sum + Number(xx[i])
    }
  if(x%sum==0){
        return true
    }else return false
    
}

 