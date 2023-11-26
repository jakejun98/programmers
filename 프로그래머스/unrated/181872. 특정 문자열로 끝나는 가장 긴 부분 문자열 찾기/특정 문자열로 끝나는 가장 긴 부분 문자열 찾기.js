function solution(myString, pat) {
   
    const s = myString.lastIndexOf(pat)
    console.log(s)
    return myString.slice(0,s+pat.length)
    
}