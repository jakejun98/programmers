function solution(str_list) {
    // "l"과 "r"이 모두 존재하지 않는 경우를 확인합니다.
    if (!str_list.includes("l") && !str_list.includes("r")) {
        return [];
    }
    
    // "l" 또는 "r" 중 하나만 존재하는 경우에도 제대로 처리할 수 있도록 수정합니다.
    for (let i = 0; i < str_list.length; i++) {
        if (str_list[i] === "l") {
            return str_list.slice(0, i);
        } else if (str_list[i] === "r") {
            return str_list.slice(i + 1);
        }
    }
    
    return [];
}
