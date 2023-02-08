function solution(numbers, k) {
    let ansIndex = 0;
    
    for(let i = 0; i < k-1; i++){
        ansIndex += 2;    
        
        if(ansIndex > numbers.length-1){
            ansIndex -= numbers.length;
        }
    }
    
    return numbers[ansIndex ];
}
