function solution(n) {
    let new_d = ""
    for(let i=0;i<n;i++){
        if(i%2==0){
            new_d = new_d + "수"
        }else 
            new_d = new_d + "박"
    }
    return new_d
}