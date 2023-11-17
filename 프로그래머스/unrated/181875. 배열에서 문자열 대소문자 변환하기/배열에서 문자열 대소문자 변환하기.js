function solution(strArr) {
    const strArray = [];
    for(let i=0;i<strArr.length;i++){
        if(i%2==1){
            strArray.push(strArr[i].toUpperCase());
        }else strArray.push(strArr[i].toLowerCase());
    }
   return strArray
}