function solution(my_string, m, c) {
    const answer = my_string.split("")
    const answer2 = []
    for(let i=0;i<my_string.length;i++){
        answer2.push(answer.splice(0,m))
    }
   let answer3 = [];
    
    for(let j=0;j<my_string.length;j++){
        if(answer2[j].length>0){
            answer3.push(answer2[j][c-1])
        }
    }
 return answer3.join("")
}