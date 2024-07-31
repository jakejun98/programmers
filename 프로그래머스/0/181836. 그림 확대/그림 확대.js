function solution(picture, k) {
    let enlargedPicture = [];

    for (let row of picture) {
        let enlargedRow = '';
        // 각 문자를 k번 반복해서 enlargedRow를 만든다
        for (let char of row) {
            enlargedRow += char.repeat(k);
        }
        // enlargedRow를 k번 반복해서 enlargedPicture에 추가한다
        for (let i = 0; i < k; i++) {
            enlargedPicture.push(enlargedRow);
        }
    }

    return enlargedPicture;
}