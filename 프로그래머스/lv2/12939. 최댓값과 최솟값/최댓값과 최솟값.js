function solution(s) {
    s = s.split(" ").sort((a,b)=>a-b)
    const newArray = [s[0],s[s.length-1]]
    return newArray.join(" ")
    
}