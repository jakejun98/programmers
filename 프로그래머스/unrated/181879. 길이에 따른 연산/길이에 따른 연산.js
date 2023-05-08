function solution(num_list) {
    let sum=1;
    
    if(num_list.length>=11){
        for(let i=0;i<num_list.length;i++){
              sum+= num_list[i]
        } sum=sum-1
    }else
        for(let j=0;j<num_list.length;j++){
             sum*= num_list[j]
        }
   return sum
}