function solution(array) {
    let answer = 0;
    const newArray = array.join("").split("").map((n) =>n == 7 ? 
                                                 answer ++ : 0);
    return answer ;
}