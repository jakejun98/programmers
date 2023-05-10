function solution(n) {
    for (let x = 1; x * x <= n; x++) {
        if (x * x === n) {
            return (x + 1) * (x + 1);
        }
    }
    return -1;
}

/*function solution(n) {
    let sum=0;
    for(let i=0 ;i<n ; i++){
        if(i*i==n){
             sum = (i+1)*(i+1)
           break;
        }else sum= -1
    }
    return sum
} */