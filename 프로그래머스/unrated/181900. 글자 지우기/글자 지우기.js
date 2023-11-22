function solution(my_string, indices) {
    const answer = my_string.split("")
    
     const filteredAnswer = answer.filter((n,l)=>!indices.includes(l))
     return filteredAnswer.join("")
}