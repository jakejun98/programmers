function solution(spell, dic) {
    let result = 2;
    const newArray = [];
    const filtered = dic.filter((n)=> n.length === spell.length)
    const spelled = spell.sort(function(a, b) {
  return a.localeCompare(b);
}).join("");
    
        for(let i =0 ; i<filtered.length ; i++){
        const sortedWord = filtered[i].split('').sort().join('');
       if(sortedWord === spelled){
           result = 1;
           break;
          
       
    }
        
   }
    
    return result
}