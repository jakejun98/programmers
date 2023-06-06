function solution(s) {
    let arr = [];
    let word = '';

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            if (word.length > 0) {
                arr.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
                word = '';
            }
            arr.push(' '); // 연속된 공백 추가
        } else {
            word += s[i];
        }
    }

    if (word.length > 0) {
        arr.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    }

    return arr.join('');
}