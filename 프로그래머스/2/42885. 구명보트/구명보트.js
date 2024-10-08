function solution(people, limit) {
    const sortedPeople = people.sort((a,b)=>a-b)
    let count = 0;
    while(sortedPeople.length!==0){
        if(sortedPeople[0]+sortedPeople[sortedPeople.length-1]<=limit){       
            count++
            sortedPeople.pop();
            sortedPeople.shift();
        }else{
            sortedPeople.pop();
            count++
            
        }
    }
    
    return count
}