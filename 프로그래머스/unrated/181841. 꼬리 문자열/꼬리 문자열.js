function solution(str_list, ex) {
    let newArray = [];
    for(let i=0;i<str_list.length;i++){
        if(str_list[i].includes(ex)){
            continue;
        }else newArray.push(str_list[i])
    }
    return newArray.join("")
}