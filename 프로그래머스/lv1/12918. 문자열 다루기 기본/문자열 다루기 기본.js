function solution(s) {
    let news = s.replace(/[^0-9]/g,"")
    if(news == s){
        if(s.length==4 || s.length==6){
        return true}
    }return false
    
}