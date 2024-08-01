function solution(cards1, cards2, goal) {
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < goal.length) {
        if (j < cards1.length && cards1[j] === goal[i]) {
            j++;
        } else if (k < cards2.length && cards2[k] === goal[i]) {
            k++;
        } else {
            return "No";
        }
        i++;
    }

    return "Yes";
}
