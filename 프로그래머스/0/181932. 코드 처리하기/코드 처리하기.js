function solution(code) {
    const ret = [];
    let mode = 0;
    for(let i=0;i<code.length;i++){
        if(mode==0){
        if(code[i]!="1"){
            if(i%2==0){
                ret.push(code[i])
            }
        }else if(code[i]=="1"){
            mode = 1;
            continue;
        }
        
    }
        if(mode==1){
            if(code[i]!="1"){
                if(i%2!=0){
                    ret.push(code[i])
                }
            }else if(code[i]=="1"){
                mode = 0;
            }
        }
        
        
    }
    if(ret.length==0){
        return "EMPTY"
    }
    return ret.join("")
}