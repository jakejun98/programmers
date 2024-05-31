function solution(A,B){
    const newArray = [];
    let sum=0;
    
    // 한쪽 내림차 한쪽 오름차
    A.sort((a,b)=>a-b)
    B.sort((a,b)=>b-a)
   
    for(let i=0;i<A.length;i++){
      sum = sum + (A[i]*B[i])
    }
    
   return sum
}