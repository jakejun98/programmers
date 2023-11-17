function solution(myString, pat) {
    const newArray = [];
    
    for(let i=0;i<myString.length;i++){
       if(myString[i]=='A'){
           newArray.push('B')
       }else newArray.push('A')
    }
    
   
    
    if(newArray.join("").includes(pat)){
        return 1
    }else  return 0
    
}