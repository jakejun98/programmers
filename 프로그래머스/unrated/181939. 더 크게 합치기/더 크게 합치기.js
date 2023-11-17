function solution(a, b) {
    if(Number(a.toString() + b.toString())>Number(b.toString() + a.toString())){
        return Number(a.toString() + b.toString())
    }else return Number(b.toString() + a.toString())
   
}