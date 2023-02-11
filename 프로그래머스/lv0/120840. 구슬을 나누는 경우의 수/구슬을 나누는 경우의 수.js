function factorial(n) {
    let returnFactorial = BigInt(1)
    for(let i=n; i>=2; i--) {
        returnFactorial *= BigInt(i);
    }
    return returnFactorial;
}
function solution(balls, share) {
    return factorial(balls)/(factorial(balls-share) * factorial(share))
}