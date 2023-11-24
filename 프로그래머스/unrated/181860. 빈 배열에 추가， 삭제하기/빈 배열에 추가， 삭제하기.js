function solution(arr, flag) {
    
    let answer = []
    for(let i=0;i<flag.length;i++){
        let j=0;
        if(flag[i]==true){
            
            while(j<arr[i]*2){
                answer.push(arr[i])
                j++
               
            }
            
        }else{
            answer = [...answer].slice(0,answer.length-arr[i])
        }
    }
    return answer
    
}