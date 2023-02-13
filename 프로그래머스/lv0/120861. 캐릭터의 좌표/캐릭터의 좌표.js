function solution(keyinput, board) {
    let x = 0;
    let y = 0;
    
    let xRange = (board[0] / 2);
    let yRange = (board[1] / 2);
    
    for (let i = 0; i < keyinput.length; i ++ ) {

        if (keyinput[i] === "right" && x + 1 < xRange) x++ 
        if (keyinput[i] === "left" && x - 1 > -xRange) x-- 
        
        if (keyinput[i] === "up" && y + 1 < yRange) y++
        if (keyinput[i] === "down" && y - 1 > -yRange) y--

    }
  
    return [x, y]
    
}
/* function solution(keyinput, board) {  //테스트 케이스 1개에서 오류남
    const newArray = [0,0]
   
    for(let i = 0 ; i<keyinput.length ; i++){
        if(keyinput[i] === 'left'){
            newArray[0]-- 
        }
        if(keyinput[i] === 'right'){
            newArray[0]++
        }
        if(keyinput[i] === 'up'){
            newArray[1]++
        }
        if(keyinput[i] === 'down'){
            newArray[1]-- 
        }
    }  
    if (Math.floor(board[0]/2) < Math.abs(newArray[0])) {
    newArray[0] = Math.sign(newArray[0]) * Math.floor(board[0]/2);
}

if (Math.floor(board[1]/2) < Math.abs(newArray[1])) {
    newArray[1] = Math.sign(newArray[1]) * Math.floor(board[1]/2);
}

    return newArray ;
}  */