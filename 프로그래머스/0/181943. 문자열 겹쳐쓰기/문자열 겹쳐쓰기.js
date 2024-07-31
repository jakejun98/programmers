function solution(my_string, overwrite_string, s) {
    // 문자열의 앞부분, 덮어쓸 부분, 뒷부분을 합친다
    let result = my_string.slice(0, s) + overwrite_string + my_string.slice(s + overwrite_string.length);
    return result;
}