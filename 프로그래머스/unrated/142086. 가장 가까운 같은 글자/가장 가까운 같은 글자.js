function solution(s) {
    const array = []; // 결과 저장할 배열
    
    for (let i = s.length - 1; i >= 0; i--) {
        let closestIndex = -1;
        let closestDistance = Infinity;
        
        for (let j = 0; j < i; j++) {
            if (s[i] === s[j]) {
                const distance = i - j;
                if (distance < closestDistance) {
                    closestIndex = j;
                    closestDistance = distance;
                }
            }
        }
        
        if (closestIndex === -1) {
            array.push(-1);
        } else {
            array.push(closestDistance);
        }
    }
    
    return array.reverse()
}