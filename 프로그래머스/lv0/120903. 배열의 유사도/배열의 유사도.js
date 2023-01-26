function solution(s1, s2) {
    var answer = 0;
    for(i=0;s1.length>i;i++){
        for(j=0;s2.length>j;j++){
            if(s1[i]===s2[j]){
                answer++;
            }
        }
    }
    return answer;
}