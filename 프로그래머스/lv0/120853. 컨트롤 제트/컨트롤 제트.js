function solution(s) {
    let sum=0
    const newArray = s.split(" ");
    for(let i = 0 ; i<newArray.length ; i++){
        if(newArray[i+1] === 'Z'){
            newArray.splice(i,1)
        }
    }
    const array = newArray.filter((n) => n !== 'Z') ;
    
    for(j=0 ; j<array.length ; j++){
        sum = sum + Number(array[j]);
    }
    
    
    return sum;
}