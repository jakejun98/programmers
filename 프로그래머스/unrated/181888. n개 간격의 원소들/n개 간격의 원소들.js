function solution(num_list, n) {
    const newArray = [];
    for(let i =0; i<num_list.length;i= i+n){
        newArray.push(num_list[i])
    }
    return newArray
}