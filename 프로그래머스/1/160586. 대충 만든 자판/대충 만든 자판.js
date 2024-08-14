function solution(keymap, targets) {
    let answer = [];
    
    // 각 target 문자열에 대해 반복
    for (let i = 0; i < targets.length; i++) {
        let press = 0;
        
        // target 문자열의 각 문자에 대해 반복
        for (let j = 0; j < targets[i].length; j++) {
            let cnt = Infinity;
            
            // keymap의 각 문자열에 대해 반복
            keymap.forEach((b) => {
                const idx = b.indexOf(targets[i][j]);
                if (idx > -1) {
                    cnt = Math.min(cnt, idx + 1);
                }
            });
            
            // 만약 cnt가 여전히 Infinity라면, 해당 문자를 keymap에서 찾을 수 없음
            if (cnt === Infinity) {
                press = -1; // 찾을 수 없는 문자가 있으면 -1로 표시
                break;
            }
            
            press += cnt;
        }
        
        answer.push(press);
    }
    
    return answer;
}