function solution(n, words) {
    let usedWords = new Set();  // 중복 단어를 확인하기 위한 Set
    usedWords.add(words[0]);
    
    for(let i=1;i<words.length;i++){
        if(words[i-1][words[i-1].length-1]!=words[i][0]){
            return [(i%n)+1,Math.floor(i/n)+1]
        }
        
        if (usedWords.has(words[i])) {
            return [(i % n) + 1, Math.floor(i / n) + 1];
        }
        
        usedWords.add(words[i]);  // 사용한 단어를 Set에 추가
        
    }
    return [0, 0];
}