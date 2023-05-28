function solution(array, commands) {
    let newArray = []
    let result = []
    for(let i=0;i<commands.length;i++){
       newArray.push(array.slice(commands[i][0]-1,commands[i][1])
                 .sort((a,b)=>a-b))
        
        result.push(newArray[i][commands[i][2]-1])   
        
    }
    return result
}