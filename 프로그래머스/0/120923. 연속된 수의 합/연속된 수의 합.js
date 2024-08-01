function solution(num, total) {
    for(let i=-100 ; i<total ; i++){
        const sumArray = []
        for(let j=1 ; j<=num ;j++ ){
           sumArray.push(i+j)
        }
        if(sumArray.reduce((a,b)=>a+b) == total){
            return sumArray
        }
    }
}


/* 수학적으로 이렇게 구할수도있음 

sum=i+(i+1)+(i+2)+⋯+(i+num−1)
sum= num/2 * (2i +num -1)
이걸 i에 대하여 정리 한것이 i의 시작값 


function solution(num, total) {
    // 수학적으로 구한 시작 값
    let start = Math.floor((total - (num * (num - 1)) / 2) / num);
    
    // 연속된 숫자 배열 생성
    const sumArray = [];
    for (let i = 0; i < num; i++) {
        sumArray.push(start + i);
    }
    
    return sumArray;
}

*/