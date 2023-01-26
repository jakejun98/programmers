function solution(my_string) {
    var answer = 0;
    let my_stringg = my_string.replace(/[^0-9]/g,"").split("").map((i) => Number(i));
    for(let i=0 ; i<my_stringg.length ; i++){
        answer = answer + my_stringg[i];
    }


    return answer;
}