function solution(s) {
    let count = 0; // 분리된 문자열의 개수
    let icount = 0; // 현재 문자 x의 개수
    let jcount = 0; // x와 다른 문자의 개수
    let x = s[0];   // 첫 번째 문자를 x로 설정

    s.split("").forEach((char, index) => {
        if (char === x) {
            icount++;
        } else {
            jcount++;
        }

        // icount와 jcount가 같아지면 문자열을 분리
        if (icount === jcount) {
            count++;
            // 남은 문자열을 처리하기 위해 초기화
            icount = 0;
            jcount = 0;
            x = s[index + 1]; // 다음 부분 문자열의 첫 문자를 x로 설정
        }
    });

    // 마지막 분리되지 않은 부분 문자열이 있다면 추가
    if (icount !== 0 || jcount !== 0) {
        count++;
    }

    return count;
}