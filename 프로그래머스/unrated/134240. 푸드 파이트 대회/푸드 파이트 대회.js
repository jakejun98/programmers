function solution(food) {
    const array =[];
    let newArray = [];
    const array2 = []
    for(let i=1 ;i<=food.length;i++){
        
        for(let j=0;j<parseInt(food[i]/2);j++){
            if(food[i]>=2){
               array.push(i)
            }
        }
        
    }
    
    array2.push(...array, 0);
    //newArray.push([...array.reverse()])
    newArray = [...array].reverse();
    
    return [...array2,...newArray].join("")
}