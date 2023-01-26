function solution(numbers) {
    var answer = 0;
    let max = 0;
    
    const newArray = numbers.sort((a,b) =>a-b)
    if(newArray[0]*newArray[1]>newArray[newArray.length-1]*newArray[newArray.length-2]){
        max = newArray[0]*newArray[1]
    }else max = newArray[newArray.length-1]*newArray[newArray.length-2]
    return answer = max;
}