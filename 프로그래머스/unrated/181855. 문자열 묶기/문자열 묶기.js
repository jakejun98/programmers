function solution(strArr) {
    const count = []; // strArr 요소 길이 저장하는 배열
    for(let i=0;i<strArr.length;i++){
        count.push(strArr[i].length)
    }
    const count1 = [];
    count.sort((a, b) => a - b)
    console.log(count)
    for(let j=count[0];j<=count[count.length-1];j++){
       let sum=0;
       for(let k=0;k<count.length;k++){
           if(j==count[k]){
               sum++
           }
       }
       count1.push(sum)  
        
    }
    count1.sort((a, b) => a - b)
    return count1[count1.length-1]
    
}