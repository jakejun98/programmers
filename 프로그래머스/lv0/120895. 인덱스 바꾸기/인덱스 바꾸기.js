function solution(my_string, num1, num2) {
    var answer = '';
    const newArray = my_string.split("")
    const tmpVar = newArray[num1];
   newArray[num1] = newArray[num2];
    newArray[num2] = tmpVar;

    
    return answer = newArray.join("")
}