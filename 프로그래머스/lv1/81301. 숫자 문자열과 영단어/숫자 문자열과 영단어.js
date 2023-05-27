function solution(s) {
  let al= ['zero','one','two','three','four','five','six','seven',    'eight','nine']
  let num = [0,1,2,3,4,5,6,7,8,9]
  let index = 0;
  let index1=0;  
    
  for(let i=0;i<al.length;i++){
     if(s.includes(al[i])){
          s = s.slice(0,i) + s.slice(i)
   }     
  }
    
  return s
}  //"one4seveneight"