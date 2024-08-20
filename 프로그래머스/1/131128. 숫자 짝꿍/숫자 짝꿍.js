function solution(X, Y) {
    const X_Array = X.split("");
    const Y_Array = Y.split("");
  
    // 각 배열에서 요소의 등장 횟수를 기록하는 객체를 생성합니다.
    const countOccurrences = (arr) => {
        return arr.reduce((acc, val) => {
            acc[val] = (acc[val] || 0) + 1;
            return acc;
        }, {});
    };

    const countX = countOccurrences(X_Array);
    const countY = countOccurrences(Y_Array);
   
    // 공통된 숫자를 추출하고, 그 중 작은 횟수만큼 결과에 추가합니다.
    const result = [];
    const allKeys = new Set([...Object.keys(countX), ...Object.keys(countY)]);

    for (const key of allKeys) {
        if (countX[key] && countY[key]) {
            const minCount = Math.min(countX[key], countY[key]);
            for (let i = 0; i < minCount; i++) {
                result.push(key);
            }
        }
    }

    // 결과가 비어 있으면 "-1" 반환
    if (result.length === 0) {
        return "-1";
    }
    
    // 결과가 "0"으로만 이루어져 있으면 "0" 반환
    if (result.every(val => val === '0')) {
        return "0";
    }

    // 내림차순 정렬 후 문자열로 반환
    let answer = result.sort((a, b) => b - a).join("");
    return answer;
}



