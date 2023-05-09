function solution(s){
    let a=0;
    let b=0;
    for(let i=0;i<s.length;i++){
        if(s[i].includes('p') || s[i].includes('P') ){
            a++
        }
       
    }
   for(let j=0;j<s.length;j++){
        if(s[j].includes('y') || s[j].includes('Y') ){
            b++
        }
       
    }
    

    if (a===b) 
        return true
     else return false
}

