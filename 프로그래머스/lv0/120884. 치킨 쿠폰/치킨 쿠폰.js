function solution(chicken) {
    let service = 0;
    let coupon = 0; 
    let result = 0;
    while(chicken >=10){
        service = parseInt(chicken/10)   //10
        coupon = coupon + (chicken%10)   
        result =result + service 
        chicken = service + (chicken%10)
    }
    
    
    return result  // 1 더해야함 
}