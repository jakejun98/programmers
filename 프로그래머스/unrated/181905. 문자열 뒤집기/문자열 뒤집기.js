function solution(my_string, s, e){
    const newArray = [];
    const newArray2 = [];
    const newArray3 = [];
    for(let i=0;i<s;i++){
        newArray.push(my_string[i])
    }
    
    const newArraySplit = newArray.join("")
    newArray2.push(my_string.slice(s,e+1))
    
    return newArraySplit + newArray2.join("").split("").reverse().join("") +my_string.split("").slice(e+1,my_string.length).join("")
}