function solution(s, skip, index) {
    let alpabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    s = s.split("");                
    skip = skip.split("");
    
    const newAlpabet =  [];
    alpabet.forEach( item=> {
        if(!skip.includes(item)){
            newAlpabet.push(item)
        }
           
        
    })
    let repeatedArray = newAlpabet.concat(newAlpabet)
    let repreatedArray2 = repeatedArray.concat(repeatedArray)
    const result = []; 
    
    for(let i=0;i<s.length;i++){
        
    newAlpabet.forEach((n,indexx)=>{
        if(s[i]==n){
            result.push(repreatedArray2[indexx+index])
        }
    })
        
        
    }
    
    
    return result.join("")
    
    
    
    
    }