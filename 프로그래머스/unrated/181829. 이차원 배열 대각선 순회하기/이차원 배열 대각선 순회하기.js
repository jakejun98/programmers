function solution(board, k) {
    let sum=0;
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[0].length;j++){
            if(i+j<=k){
                sum= sum + board[i][j]
            }
        }
    }
    return sum
}