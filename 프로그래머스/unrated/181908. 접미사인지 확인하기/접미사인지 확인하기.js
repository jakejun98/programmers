function solution(my_string, is_suffix) {
    
    if(my_string.length<is_suffix){
        return 0
    }
    
    if(my_string.slice(-is_suffix.length,my_string.length)==is_suffix){
        return 1
    }else return 0
}