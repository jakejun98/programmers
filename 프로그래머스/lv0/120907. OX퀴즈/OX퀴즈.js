function solution(quiz) {
 
    const ox_array = []
    for(let i=0 ; i<quiz.length; i++){
          let sum = 0;
          
          let new_quiz = []
          
           new_quiz = quiz[i].split(" ")
            if(new_quiz[1] == '+'){
                sum = Number(new_quiz[0]) + Number(new_quiz[2]);
            }else if (new_quiz[1] == '-'){
                sum = Number(new_quiz[0]) - Number(new_quiz[2]);
            }
        
            if(sum === Number(new_quiz[4])){
             ox_array.push("O") ;   
            }else {
             ox_array.push("X") ;  
        
            }
        new_quiz.length=0;
        }  
    
    return ox_array
} 

