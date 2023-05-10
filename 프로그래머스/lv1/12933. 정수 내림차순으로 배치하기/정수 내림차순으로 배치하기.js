function solution(n) {
    const newN = (n+"").split("").sort((a,b) =>b-a ).join("")
    return Number(newN)
}