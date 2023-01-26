function solution(numbers, direction) { 
    let answer = [];
  
    if(direction==='right'){
        numbers.unshift(numbers.pop());
        answer= [...numbers] 
    }else if(direction==='left'){
         numbers.push(numbers.shift());
         answer= [...numbers]
    }     
    return answer
} 