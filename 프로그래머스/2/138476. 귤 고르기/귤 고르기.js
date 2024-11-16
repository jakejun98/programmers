function solution(k, tangerine) {
    tangerine.sort((a,b)=>a-b);
    const result = {};
    
    tangerine.forEach((x) => { 
      result[x] = (result[x] || 0)+1; 
    });
    
     // 등장 횟수를 배열로 변환 후 내림차순 정렬
    const counts = Object.values(result).sort((a, b) => b - a);
    
    let countKinds = 0; // 선택한 귤 종류 수
    for (let count of counts) {
        k -= count; // 가장 큰 등장 횟수부터 선택
        countKinds++; // 귤 종류 추가
        if (k <= 0) break; // k개를 모두 선택하면 종료
    }

    return countKinds;
}