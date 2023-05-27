function solution(s) {
  let al= ['zero','one','two','three','four','five','six','seven',    'eight','nine']
  let num = [0,1,2,3,4,5,6,7,8,9]
   
    
    
  for (let i = 0; i < al.length; i++) {
  let index = s.indexOf(al[i]);
  if (index !== -1) {
    let replacement = num[i];
    s = s.replace(new RegExp(al[i], 'g'), replacement);
  }
      
}
    
    return Number(s)
}    
 //"one4seveneight"