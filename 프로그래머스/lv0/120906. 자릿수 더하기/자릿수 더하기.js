function solution(n) {
    var answer = 0;
    let ncs = n.toString().split("");
    for(let i=0 ; i<ncs.length ; i++){
        answer += Number(ncs[i]);
    }
    return answer;
}