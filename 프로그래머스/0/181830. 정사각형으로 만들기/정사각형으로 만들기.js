function solution(arr) {
    let rowCount = arr.length;
    let colCount = arr[0].length;

    if (colCount > rowCount) {
        // 열의 수가 행의 수보다 많을 경우
        while (arr.length < colCount) {
            arr.push(new Array(colCount).fill(0));
        }
    } else if (rowCount > colCount) {
        // 행의 수가 열의 수보다 많을 경우
        for (let i = 0; i < rowCount; i++) {
            while (arr[i].length < rowCount) {
                arr[i].push(0);
            }
        }
    }

    return arr;
}
