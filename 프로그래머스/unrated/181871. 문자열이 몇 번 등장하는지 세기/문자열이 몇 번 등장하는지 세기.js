function solution(myString, pat) {
    let count = 0;
    let s = 0;

    while ((s = myString.indexOf(pat, s)) !== -1) {
        count++;
        s += 1;
    }

    return count;
}