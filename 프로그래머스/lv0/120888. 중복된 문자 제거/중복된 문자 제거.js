function solution(my_string) {
   my_string = my_string.split("").filter((v, i) => my_string.indexOf(v) === i)
    .join("");
    
    return my_string ;
    
}
