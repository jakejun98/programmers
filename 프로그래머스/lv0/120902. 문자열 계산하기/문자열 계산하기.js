function solution(my_string) {  
    const newArray = my_string.split(" ");
    let result = Number(newArray[0]);
    for(let i=1 ; i<newArray.length ; i+=2){
        if(newArray[i]==='+'){
            result =result + Number(newArray[i+1]);
        }else{
            result = result - Number(newArray[i+1]) ;
        }
       
        
    }
   
    return result
}