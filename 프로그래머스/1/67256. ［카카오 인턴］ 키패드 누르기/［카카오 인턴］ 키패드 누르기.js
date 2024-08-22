function solution(numbers, hand) {
    const keypad = [[1,2,3],[4,5,6],[7,8,9],['*',0,'#']];
    const result = [];
    let leftKey = "*";
    let rightKey = "#";
    
    const getCoordinates = (num) => {
        for (let i = 0; i < keypad.length; i++) {
            const col = keypad[i].indexOf(num);
            if (col !== -1) {
                return [i, col];
            }
        }
    };

    for (let i = 0; i < numbers.length; i++) {
        if ([1, 4, 7].includes(numbers[i])) {
            leftKey = numbers[i];
            result.push('L');
        } else if ([3, 6, 9].includes(numbers[i])) {
            rightKey = numbers[i];
            result.push('R');
        } else {
            let [numRow, numCol] = getCoordinates(numbers[i]);
            let [leftKeyRow, leftKeyCol] = getCoordinates(leftKey);
            let [rightKeyRow, rightKeyCol] = getCoordinates(rightKey);

            const leftDistance = Math.abs(numRow - leftKeyRow) + Math.abs(numCol - leftKeyCol);
            const rightDistance = Math.abs(numRow - rightKeyRow) + Math.abs(numCol - rightKeyCol);

            if (leftDistance < rightDistance || (leftDistance === rightDistance && hand === "left")) {
                leftKey = numbers[i];
                result.push('L');
            } else {
                rightKey = numbers[i];
                result.push('R');
            }
        }
    }

    return result.join("");
}
