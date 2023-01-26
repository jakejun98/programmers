function solution(my_string) {
    var answer = '';
    let newArray = [];
    const upperCase = my_string.toUpperCase();
    const lowerCase = my_string.toLowerCase();
    
    for(let i=0 ; i<my_string.length ; i++){
       if(my_string[i]===lowerCase[i] ){
           newArray[i] = upperCase[i];
       } else 
           newArray[i] = lowerCase[i] ;
       
    }
    
    return answer = newArray.join("");
}