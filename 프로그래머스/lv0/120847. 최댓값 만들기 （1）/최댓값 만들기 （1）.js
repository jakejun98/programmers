function solution(numbers) { 
    let soltedArray=numbers.sort((a,b) =>a-b );
    
    return soltedArray[soltedArray.length-1]*
        soltedArray[soltedArray.length-2];
} 