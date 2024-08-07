function solution(lottos, win_nums) {
    const filteredlottos = lottos.filter(n=>!win_nums.includes(n))
    let zerocount = 0;
    const result = []
    
    for(let i=0 ;i<filteredlottos.length;i++){
        if(filteredlottos[i]==0){
            zerocount++
        }
    }
    let max = lottos.length-filteredlottos.length+zerocount
    let low = lottos.length-filteredlottos.length
    
    if(max==6){
        result.push(1)
    }
    if(max==5){
        result.push(2)
    }
    if(max==4){
        result.push(3)
    }
    if(max==3){
        result.push(4)
    }
    if(max==2){
        result.push(5)
    }
    if(max==1 || max==0){
        result.push(6)
    }
    if(low==6){
        result.push(1)
    }
    if(low==5){
        result.push(2)
    }
    if(low==4){
        result.push(3)
    }
    if(low==3){
        result.push(4)
    }
    if(low==2){
        result.push(5)
    }
    if(low==1 || low==0){
        result.push(6)
    }
    return result
}