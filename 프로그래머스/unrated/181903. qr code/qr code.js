function solution(q, r, code) {
    const answer  = [];
    for(let i=0;i<code.length;i++){
        if(i%q==r){
            answer.push(code[i])
        }
    }
    return answer.join("")
} // 인덱스를 q로 나누고 나머지가 r이면 새배열에 push 후 join해서 출력 