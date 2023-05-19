function solution(s, n) {
   let newal = []
   
   for(let i=0;i<s.length;i++){
       newal.push(s.charCodeAt(i)) //배열에서 '32'는 공백을 뜻함 
   }
   
    
    for(let j=0;j<newal.length;j++){
        if(newal[j]==32){ 
            newal[j] = " "   
            continue;
        }         
        
       
        
        if(s.charAt(j)==s.charAt(j).toUpperCase() && newal[j]+n >90){ //s의 인덱스가 대문자,  newal[j]+n이 90보다 크면 
            newal[j] = String.fromCharCode((newal[j]+n-65)%26+65);
        }else if(s.charAt(j)==s.charAt(j).toUpperCase()&& newal[j]+n <=90){
            newal[j] = String.fromCharCode(newal[j]+n);
        }
        
        
        
        if(s.charAt(j)==s.charAt(j).toLowerCase() && newal[j]+n >122){ //s의 인덱스가 소문자,  newal[j]+n이 122보다 크면 
            newal[j] = String.fromCharCode((newal[j]+n-97)%26+97);
        }else if(s.charAt(j)==s.charAt(j).toLowerCase() && newal[j]+n <=122){
            newal[j] = String.fromCharCode(newal[j]+n);
        }
        
        
    }
    
   
    
    


    
            
        
        
    return  newal.join("")
    }
// 11줄에서 32대신 공백을넣고  마지막에 join을 하니 문제해결 
    
    
  
