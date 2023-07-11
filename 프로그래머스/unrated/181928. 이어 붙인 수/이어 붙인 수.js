function solution(num_list) {
    let newArray1 = []
    let newArray2 = []
    for(let i=0;i<num_list.length;i++){
        if(num_list[i]%2==0){
            newArray1.push(num_list[i])
        }else 
            newArray2.push(num_list[i])
    }
    newArray1 = newArray1.join("")
    newArray2 = newArray2.join("")
    
    
    return Number(newArray1) + Number(newArray2)
   
}