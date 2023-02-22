function solution(a, b) {
    let result =0;
     const smallNumber = []
       
 let G = 0 ; // 최대공약수 
    for(let i = 0 ; i<b ; i++){
        if(a%i==0 && b%i==0){
            G = i; 
        }
    }
    a= a/G ;
    b= b/G ;
    let idx = 2 
    while(b !== 1) {       
        if(b%idx === 0) {
            smallNumber.push(idx)
            b/=idx
            idx = 2
        } else {
            idx += 1
        }
    }
 
   const newArr = Array.from(new Set(smallNumber)); //[2 5]
    let found = false ;
     for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] !== 2 && newArr[i] !== 5) {
      found = true;
      break;
    }
  }

  return found ? 2 : 1;
}
