function solution(n) {
    let result = 0;
    let i = 1;
    
    while (i * (i + 1) / 2 <= n) {
        let sum = i * (i + 1) / 2;
        if ((n - sum) % i === 0) {
            result++;
        }
        i++;
    }
    
    return result;
}