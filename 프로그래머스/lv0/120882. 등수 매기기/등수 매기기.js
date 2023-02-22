function solution(score) {
    const newArray = [];
    for(let i =0; i<score.length ; i++){
        newArray.push((score[i][0]+score[i][1])/2)
    }
    let n = newArray.length ;
    let result= Array.from({length:n},()=>1);
    for(let j=0 ;j<n ; j++){
        for(let k=0 ; k<n ; k++){
            if(newArray[k]>newArray[j]){
                result[j]++;
            }
        }
    }
    return result
}