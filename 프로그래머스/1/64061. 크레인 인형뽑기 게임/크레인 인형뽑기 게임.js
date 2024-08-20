function solution(board, moves) {
    const bombArray = [];
    let count = 0;
    moves.forEach((n)=>{
    for(let i=0;i<board.length;i++){
        if(board[i][n-1]!=0){
            bombArray.push(board[i][n-1])
            board[i][n-1] = 0
            break;
        }
        
        
    }
    
    })

    for (let i = 0; i < bombArray.length - 1; i++) {
    if (bombArray[i] == bombArray[i + 1]) {
        bombArray.splice(i, 2);
        
        
        count += 2;
        i -= 2; // 뒤로 한 칸 이동하여 새로운 배열에서 중복된 쌍이 없는지 확인
    }
        
}
    
    
    return count
}