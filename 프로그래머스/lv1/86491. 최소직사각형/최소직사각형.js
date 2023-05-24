function solution(sizes) {
    const left=[]
    const right=[]
    
    for(let i=0;i<sizes.length;i++){
        sizes[i]= sizes[i].sort((a,b) =>a-b)
        left.push(sizes[i][0])
        right.push(sizes[i][1])
    }
    
    return Math.max(...left)*Math.max(...right)
}