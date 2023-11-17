function solution(my_string) {
    const newArray = [];
    
    for(let i=0;i<my_string.length;i++){
        if(my_string[i]!=' '){
            newArray.push(my_string[i])
        }
    }
    return my_string.split(" ").filter(value=>value!='')
}