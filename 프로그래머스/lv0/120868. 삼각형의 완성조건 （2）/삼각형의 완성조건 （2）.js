function solution(sides) {
   sides = sides.sort((a,b) =>a-b);
    let key = 0 ;
    for(let i =sides[1] - sides[0]+1 ; i <= sides[1] ; i++ ){
        key ++ ;
    }
    for(let j =sides[1] +1 ; j<=sides[0]+sides[1] -1 ; j++){
        key ++;
    }
    return key;
} 