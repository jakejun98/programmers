function solution(a, d, included) {
   // 등차수열 나열한 배열 만들고 included배열로 필터 어차피 인덱스는 같으니까 
   const answer = [a];
   for(let i=0;i<included.length-1;i++){
       answer.push(answer[i]+d)
   }
    const filtedAnswer = answer.filter((n,l)=> included[l] ==true)
    return filtedAnswer.reduce((a,b)=>a+b)
}