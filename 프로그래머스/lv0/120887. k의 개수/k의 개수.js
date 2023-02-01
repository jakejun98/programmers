function solution(i, j, k) {
    let count = 0 ;
    for(let n=i ; n<=j ; n++ ){
         const str1 = String(n).split("");
        for(let x = 0 ; x<str1.length ; x++){
            if(Number(str1[x]) ===k ){
                count ++;
            }
        }
            
    }
    return count ;
}



