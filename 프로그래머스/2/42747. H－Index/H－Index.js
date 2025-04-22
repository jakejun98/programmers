function solution(citations) {
  citations.sort((a, b) => b - a);
  
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] === i + 1) {
      return i + 1;
    } else if (citations[i] < i + 1) {
      return i;
    }
  }
  return citations.length;
}



// ciataions[i]와 나머지 요소를 비교하여 같거나 큰거 카운트 함과 동시에 slice로 잘라냄
// 카운트된게 ciataions[i]보다 크거나 같고 , 남은 배열요소들을 카운트하여 기존 카운트랑 같거나 적으면 바로 return  