// markCell의 범위를 중심으로 읽으면 좋다 

function solution(board) {
    // 원래 보드를 직접 수정하지 않도록 보드의 복사본을 만듭니다.
    let newBoard = board.map(row => row.slice());

    // 인접한 셀을 검사하고 마크하는 함수
    function markCell(x, y) {
        if (x >= 0 && x < board.length && y >= 0 && y < board.length) {
            newBoard[x][y] = 1;
        }
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] == 1) {
                // 주변 셀을 마크합니다.
                markCell(i - 1, j - 1);
                markCell(i - 1, j);
                markCell(i - 1, j + 1);
                markCell(i, j - 1);
                markCell(i, j + 1);
                markCell(i + 1, j - 1);
                markCell(i + 1, j);
                markCell(i + 1, j + 1);
            }
        }
    }
    let count = 0 ;
    
    for (let k = 0; k < newBoard.length; k++) {
        for (let l = 0; l < newBoard.length; l++) {
            if(newBoard[k][l]==0){
                count++;
            }
        }
    }
    return count
}