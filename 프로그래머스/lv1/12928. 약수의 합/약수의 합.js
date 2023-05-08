function solution(n) {
    const new_array = [];
    for(let i = 1; i <= n ; i++){
        if(n % i === 0){
            new_array.push(i);
        }
    }
    let sum = 0;
    new_array.forEach((number) => {
        sum += number;
    });
    return sum;
}