function solution(n) {
    let newArray = []
    let sum=0;
    while(n>=3){

        newArray.push(n%3)
         n=Math.floor(n/3)
        
        
    }
    newArray.push(n);
    newArray = newArray.join("")
    
      // 3진법 상에서 뒤집은 후, 10진법으로 변환
    for (let i = newArray.length; i >= 1; i--) {
        sum += parseInt(newArray[i - 1]) * Math.pow(3, newArray.length - i);
    }
    
    return sum
}
