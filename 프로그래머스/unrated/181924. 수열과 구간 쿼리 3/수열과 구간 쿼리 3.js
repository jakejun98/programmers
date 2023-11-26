function solution(arr, queries) {
    const answer = [];
    
    for(let i=0;i<queries.length;i++){
        const item = arr.splice(queries[i][1],1)
        arr.splice(queries[i][0],0,item[0])
        const item2 = arr.splice(queries[i][0]+1,1)
        arr.splice(queries[i][1],0,item2[0])
    }
    
    
    return arr
    
}