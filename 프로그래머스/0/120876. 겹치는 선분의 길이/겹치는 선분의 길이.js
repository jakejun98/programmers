function solution(lines) {
    // 좌표평면의 겹치는 부분을 계산할 배열을 선언
    const lineMap = new Array(201).fill(0); // 음수도 고려하여 0~200까지

    // 각 선분의 범위를 lineMap에 기록
    lines.forEach(([start, end]) => {
        for (let i = start; i < end; i++) {  // i < end이므로 한 점에서만 만나는 경우는 자동으로 제외됩니다.
            lineMap[i + 100]++; // 음수를 포함하기 위해 100을 더해줌
        }
    });

    // 2개 이상의 선분이 겹치는 구간의 길이 계산
    let overlapLength = 0;
    lineMap.forEach(count => {
        if (count > 1) {
            overlapLength++;
        }
    });

    return overlapLength;
}