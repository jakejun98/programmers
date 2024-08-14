function solution(participant, completion) {
    const participantMap = new Map();

    // 참가자 이름을 Map에 저장하고, 각 이름의 등장 횟수를 기록합니다.
    participant.forEach(name => {
        participantMap.set(name, (participantMap.get(name) || 0) + 1);
    });

    // 완주한 사람들의 이름을 Map에서 찾아 감소시킵니다.
    completion.forEach(name => {
        participantMap.set(name, participantMap.get(name) - 1);
    });

    // Map에서 값이 1인 이름을 찾습니다 (완주하지 못한 사람).
    for (let [key, value] of participantMap) {
        if (value > 0) {
            return key;
        }
    }
}
