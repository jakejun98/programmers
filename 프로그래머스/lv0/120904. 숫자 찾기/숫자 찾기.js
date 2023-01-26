function solution(num, k) {
    let answer = -1;
    num = (num + "").split("") ;
    for(let i =0; i<num.length ; i++){
        if(num[i]==k){
            answer=num.indexOf(num[i])+1;
        }
    }
   return answer ;
    
}