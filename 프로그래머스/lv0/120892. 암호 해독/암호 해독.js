function solution(cipher, code) {
    var answer = '';
    let newArray = cipher.split("");
    let newArrayy =[];
    for(let i = code-1 ; i<newArray.length ; i= i+code){
        
        newArrayy.push(newArray[i]);
    }
    return answer =newArrayy.join("");
}