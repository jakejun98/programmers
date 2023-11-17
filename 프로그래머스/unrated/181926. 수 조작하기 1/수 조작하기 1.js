function solution(n, control) {
    const newArray = control.split("");
    
    for(let i =0;i<newArray.length;i++){
        if(newArray[i]== 'w'){
            n = n + 1 ;
        }
        if(newArray[i]=='s'){
            n = n - 1 ;
        }
        if(newArray[i]=='d'){
            n = n + 10 ;
        }
        if(newArray[i]=='a'){
            n = n - 10;
        }
    }
    
    return n
}