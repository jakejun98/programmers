function solution(s) {
    let removeCount = 0;
    let count = 0;
    while(s.length>1){
        let newS =  s.split("").filter((n)=>n!="0")
        removeCount = removeCount + (s.length-newS.length)
        
        let afterLength = newS.length
        s = afterLength.toString(2)
        count++
    }
    
    return [count,removeCount]
}

