function solution(a, b) {
    let answer = a.toString() + b.toString();
    if(Number(answer)>a*b*2){
        return Number(answer)
    }else return a*b*2
}