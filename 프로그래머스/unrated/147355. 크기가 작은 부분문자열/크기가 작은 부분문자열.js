function solution(t, p) { 
    const newArray =[]
    let count=0;
    for(let i=0;i<=t.length-p.length;i++){
        newArray.push(Number(t.slice(i,i+ p.length)))
    }
    
    for(let j=0;j<newArray.length;j++){
        if(newArray[j]<=Number(p)){
            count++
        }
    }
    
    
    
    return count
}

//slice
//314,141,415,159,592