function solution(name, yearning, photo) {
    const newArray = []
    let sum=0
    
    for (let i = 0; i < photo.length; i++) {
        
     for (let j = 0; j < photo[i].length; j++) {
      const item = photo[i][j];
      
     if (name.includes(item)) {
      const index = name.indexOf(item);
      sum = sum + yearning[index]
    }
              
  }
        
        newArray.push(sum) 
      sum=0
        
        
        
}
 return newArray
}