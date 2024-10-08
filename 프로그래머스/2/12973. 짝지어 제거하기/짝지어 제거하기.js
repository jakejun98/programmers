function solution(s) {
    const stack = [];
    
    for (let char of s) {
        // 스택의 마지막 문자와 현재 문자가 동일하면 스택에서 제거
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    
    // 스택이 비어있으면 모든 쌍이 제거된 것
    return stack.length === 0 ? 1 : 0;
}