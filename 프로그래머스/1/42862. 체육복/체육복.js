function solution(n, lost, reserve) {
     // 모든 student가 체육복을 1개씩 갖고 있는 것으로 가정한 배열. 
    var students = new Array(n).fill(1);

      // 체육복을 잃어버린 student의 체육복 개수를 -1 감소
    lost.forEach(l => students[l - 1]--);

      // 여분 체육복이 있는 student의 체육복 개수를 +1 증가
    reserve.forEach(r => students[r - 1]++);
    
    students.forEach((_, idx, arr) => {
    if (arr[idx] > 1 && arr[idx - 1] === 0) {
        arr[idx]--;
        arr[idx - 1]++;
    } else if (arr[idx] > 1 && arr[idx + 1] === 0) {
        arr[idx]--;
        arr[idx + 1]++;
    }
});
    return students.filter(v => v > 0).length;
}