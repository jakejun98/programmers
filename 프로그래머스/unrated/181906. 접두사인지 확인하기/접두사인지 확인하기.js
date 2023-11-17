function solution(my_string, is_prefix) {
    if(my_string.length<is_prefix.length){
        return 0
    }
    
   let newString = my_string.split("").slice(0,is_prefix.length).join("");
   
    if(newString == is_prefix){
        return 1
    }else return 0
}