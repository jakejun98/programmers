function solution(num_list) { 
    const countArray = [];
    for(let i=0;i<num_list.length;i++){
        let j = 0;
        let count = num_list[i];
        
        while(count>1){
        
        
        if(count%2==0){
        count = count/2 ;
        j++
        }else{
        count = (count-1)/2 ;
        j++
        }
        
        
        }
        
        countArray.push(j)
       
    }
    console.log(countArray)
    return countArray.reduce((a,b)=>a+b,0)
}