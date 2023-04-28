function solution(my_string, k) {
    const new_array=  [];
    const new_string = my_string.split(" ")
    for(let i=0 ; i<k ; i++){
        new_array.push(new_string)
    }
    return new_array.join("")
}