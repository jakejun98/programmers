function solution(my_string, index_list) {
    const newArray = [];
    
   
        for(let j=0;j<index_list.length;j++){
            newArray.push(my_string[index_list[j]])
        }
     return newArray.join("")
    
    
    
}