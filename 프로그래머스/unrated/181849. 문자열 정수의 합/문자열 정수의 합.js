function solution(num_str) {
    num_str.split("");
 
    let sum=0;
    for(let i=0;i<num_str.length;i++){
        sum=sum + Number(num_str[i]);
    }
    return sum 
}