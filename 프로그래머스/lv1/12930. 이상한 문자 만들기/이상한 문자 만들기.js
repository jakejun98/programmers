function solution(s) {
    let words = s.split(" ");
    
    for(let i = 0; i < words.length; i++){
        let word = words[i];
        let newWord = "";
        
        for(let j = 0; j < word.length; j++) {
            if(j % 2 === 0) {
                newWord += word[j].toUpperCase();
            } else {
                newWord += word[j].toLowerCase()
            }
        }
        
        words[i] = newWord;
    }
    
    return words.join(" ");
    
}

console.log(solution("tru anc anccdada"))
