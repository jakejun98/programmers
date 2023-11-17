function solution(my_string, alp) {
    const newArray = my_string.split("");
    const returnArray = []
    for(let i=0;i<newArray.length;i++){
       if(newArray[i]==alp){
           returnArray.push(newArray[i].toUpperCase())
       }else returnArray.push(newArray[i])
    }
    return returnArray.join("")
}