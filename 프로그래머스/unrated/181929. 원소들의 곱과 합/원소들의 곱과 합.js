function solution(num_list) {
    let cal = 1;
    let call = 0;
    
    for(let i=0;i<num_list.length;i++){
        cal = cal * num_list[i];
        call = call + num_list[i];
    }
    console.log(cal)
  
    if(cal<(call*call)){
        return 1
    }else return 0
}