function solution(arr) {
    let i =0;
    const stk = [];
    for(i=0;i<arr.length;i++){
    if(i<arr.length){
        if(stk.length==0){
            stk.push(arr[i])
            continue;
        }else{
            if(stk[stk.length-1]<arr[i]){
              stk.push(arr[i])
              continue;
        }else{
            stk.pop()
            i = i-1
            
        }
        }
        
    }
    }
    return stk
}