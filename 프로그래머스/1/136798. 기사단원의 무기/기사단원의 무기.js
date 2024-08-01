// 시간복잡도 고려해서 O(sqrt(n))로 
function solution(number, limit, power) {
    const yaksoo = [];
    // 약수 
    for(let i=1;i<=number; i++){
        let count=0;
        for(let j=1;j*j<=i;j++){
            if(i%j==0){
                count++
                if (j !== i / j) {
                    count++;
                }
            
            }
        }
        yaksoo.push(count)
    }
    const newArray = [...yaksoo].filter((x)=>x<=limit)
    return  newArray.reduce((a,b)=>a+b) + (yaksoo.length - newArray.length) * power
}