function solution(todo_list, finished) {
    for(let i=0;i<todo_list.length;i++){
        if(finished[i]==true){
            todo_list.splice(i,1,1)
        }
        
    }
    
    return todo_list.filter(n=>!todo_list[n]==1)
}