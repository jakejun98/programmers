function solution(order) { // 아무거나는 아메
    let ame = 4500;
    let latte = 5000;
    let sum = 0;
    
    for(let i=0; i<order.length;i++){
        if(order[i].includes("latte")){
            sum = sum + latte;
        }else sum = sum + ame;
        console.log(sum)
    }
    return sum 
    
}