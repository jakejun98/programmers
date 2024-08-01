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