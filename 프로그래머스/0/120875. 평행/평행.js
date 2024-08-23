function solution(dots) {
    // 각 쌍의 기울기를 계산하는 함수
    function getSlope(dot1, dot2) {
        return (dot2[1] - dot1[1]) / (dot2[0] - dot1[0]);
    }

    // 첫 번째 쌍 : (dot1, dot2)와 (dot3, dot4)
    const slope1 = getSlope(dots[0], dots[1]);
    const slope2 = getSlope(dots[2], dots[3]);
    if (slope1 === slope2) return 1;

    // 두 번째 쌍 : (dot1, dot3)와 (dot2, dot4)
    const slope3 = getSlope(dots[0], dots[2]);
    const slope4 = getSlope(dots[1], dots[3]);
    if (slope3 === slope4) return 1;

    // 세 번째 쌍 : (dot1, dot4)와 (dot2, dot3)
    const slope5 = getSlope(dots[0], dots[3]);
    const slope6 = getSlope(dots[1], dots[2]);
    if (slope5 === slope6) return 1;

    return 0;
}