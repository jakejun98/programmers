function solution(numbers) {
    var answer = [0];
    for(i=0;numbers.length>i;i++){
        answer[i]=numbers[i]*2;
    }
    return answer;
}