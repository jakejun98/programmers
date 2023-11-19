function solution(my_strings, parts) {
    const newArray = [];
    
    for(let i=0;i<my_strings.length;i++){
        newArray.push(my_strings[i].slice(parts[i][0],parts[i][1]+1))
    }
    return newArray.join("")
}