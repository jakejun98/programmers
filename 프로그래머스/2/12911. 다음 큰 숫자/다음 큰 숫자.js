/* function solution(n) {
    
    let result = 0;
    let sum = n 
    let binary = ""; 
    let newArray = []
    while(n>0){               // n을 2진수로 
       binary = (n%2)+binary;
       n = Math.floor(n/2) 
    }
    binary = binary.split("0").join("")  // "1111" 형식으로 나타냈음 
                                        //마지막에 length로 비교
      
    for(let i=sum+1;i<=1000000;i++){
        let binary2 = "";
        let temp = i ;
        
        while(temp>0){
            binary2 = (temp%2) + binary2;
            temp = Math.floor(temp/2)
          }
           binary2 = binary2.split("0").join("")
           
         if(binary.length == binary2.length){
          
            newArray.push(i)
            
            
        }
    }
       
   return newArray[0]
 
}  */
function solution(n) {
    let oneNum = n.toString(2).split("1").length;
   
    while (true) {
      n++;
      if (n.toString(2).split("1").length === oneNum) return n;
    }
  }