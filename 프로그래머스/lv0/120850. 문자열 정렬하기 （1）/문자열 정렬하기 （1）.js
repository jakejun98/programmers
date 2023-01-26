function solution(my_string) {
    var answer = [];
    let newArray = my_string.split("");
    for(let i=0 ; i<newArray.length ; i++){
        if(isNaN(my_string[i])=== false)
            answer.push(parseInt(my_string[i]));
    }
    return answer.sort();
}