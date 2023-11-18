function solution(num_list) {
    let sumHol = 0;
    let sumZZac = 0;
    
    for(let i=0;i<num_list.length;i=i+2){
        sumHol = sumHol + num_list[i];
    }
    for(let j=1;j<num_list.length;j=j+2){
        sumZZac = sumZZac + num_list[j];
    }
    
    if(sumHol>sumZZac){
        return sumHol
    }else return sumZZac
}