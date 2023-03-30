function solution(polynomial) {
    let x_front = 0;
    let front = 0;
    let poly = polynomial.split(" ");
    for(let i = 0; i < poly.length ; i++) {
        if(poly[i].includes('x')) {
            if(poly[i].length > 1) {
                x_front += parseInt(poly[i]);
            } else {
     
                x_front += 1;
            }
        }else if(!isNaN(poly[i])){
            front = front + parseInt(poly[i])
        }
    }
    
   if(x_front !== 0 && front !== 0){
        if(x_front === 1){
            return `x + ${front}`;        
        }
        
        return `${x_front}x + ${front}`;    
    }
    
    if(x_front !== 0 && front === 0){
        if(x_front === 1){
            return "x";
        }
        
        return `${x_front}x`;
    }
    
    if(x_front === 0 && front !== 0){
        return `${front}`;
    }
    
    if(x_front === 0 && front === 0){
        return "0";
    }
}