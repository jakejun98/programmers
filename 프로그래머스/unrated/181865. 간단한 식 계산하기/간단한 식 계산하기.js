function solution(binomial) {
    let answer = binomial.split(" ");
   
        if(answer[1]=='+'){
           return Number(answer[0])+Number(answer[2])
           }
        if(answer[1]=='-'){
            return Number(answer[0])-Number(answer[2])
        }
        if(answer[1]=='*'){
            return Number(answer[0])*Number(answer[2])
        }
    }
