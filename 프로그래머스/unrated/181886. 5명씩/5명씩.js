function solution(names) {
    const newArray = [];
    
    for(let i=0;i<names.length;i=i+5){
        newArray.push(names[i])
    }
    return newArray
}