function solution(want, number, discount) {
    const newWant = [];
    for (let i = 0; i < want.length; i++) {
        for (let j = 0; j < number[i]; j++) {
            newWant.push(want[i]);
        }
    }
    newWant.sort();

    let answer = 0;
    
    for (let i = 0; i <= discount.length - 10; i++) {
        const sliced = discount.slice(i, i + 10).slice(); // 복사
        sliced.sort();
        if (arraysEqual(sliced, newWant)) {
            answer++;
        }
    }

    return answer;
}

// 배열 비교 함수 (배열 길이와 각 원소 순서대로 비교)
function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}
