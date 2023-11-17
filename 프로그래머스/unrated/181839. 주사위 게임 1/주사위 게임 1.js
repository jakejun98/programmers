function solution(a, b) {
    if(a%2==1){
        if(b%2==1){
            return a*a + b*b
        }
        else return (a+b)*2
    }else if(b%2==1){
        return (a+b)*2
    }return Math.abs(a-b)
    
}