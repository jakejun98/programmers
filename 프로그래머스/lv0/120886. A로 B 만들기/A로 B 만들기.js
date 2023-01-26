function solution(before, after) {
    before = before.split("").sort().join("");
    after = after.split("").sort().join("");
    if(after == before)
        return 1 ;
    else return 0 ;
}