function solution(l, r) {
    const newResult = [];
    for (let i = l; i <= r; i++) {
        const str = i.toString();
        // 숫자가 5와 0만으로 구성되어 있는지 확인
        if (str.split('').every(char => char === '5' || char === '0')) {
            newResult.push(i);
        }
    }
    return newResult.length > 0 ? newResult : [-1];
}