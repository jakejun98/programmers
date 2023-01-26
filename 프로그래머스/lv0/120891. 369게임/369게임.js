function solution(order) {
    const num = (order+"").split("").filter((n) => n==3 || n==6 || n==9);
    return num.length;
}