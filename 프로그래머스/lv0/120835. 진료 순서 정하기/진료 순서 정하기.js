function solution(emergency) {
    const sortedEmergency = [...emergency].sort((a,b) => b-a)
    // 원본 배열의 요소를 정렬된 배열에서의 몇 번째 인덱스인지 판별
    return emergency.map((a) => sortedEmergency.indexOf(a)+1)
}
