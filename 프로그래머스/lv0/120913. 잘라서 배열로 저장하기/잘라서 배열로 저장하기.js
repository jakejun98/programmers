function solution(my_str, n) {
    const newArray = my_str.split("");
    const ans = [];
    
    while(newArray.length>0){
        ans.push(newArray.splice(0,n).join("")); //원본배열 n까지 삭제됨 
    }
    return ans ;
}