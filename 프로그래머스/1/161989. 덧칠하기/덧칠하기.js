function solution(n, m, section) {
    const set = new Set(Array.from({ length: n }, (_, i) => i + 1));
    let count = 0;

    if (section[section.length - 1] - section[0] < m) {
        return 1;
    } else {
        const processed = new Set(); // 중복 처리를 위한 Set
        section.forEach(value => {
            if (!processed.has(value) && set.has(value)) {
                // value부터 시작해 m개의 요소를 처리
                for (let i = 0; i < m; i++) {
                    set.delete(value + i);
                    processed.add(value + i);
                }
                count++;
            }
        });
    }
    return count;
}

