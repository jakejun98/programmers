function solution(n, arr1, arr2) {
    const newarr1 = []
    const newarr2 = []
    const newArray = []
    const result = []
     for(let i=0;i<n;i++){
         newarr1.push(arr1[i].toString(2).padStart(n, '0'))
         newarr2.push(arr2[i].toString(2).padStart(n, '0'))
         
         for(let j=0 ; j<n ; j++){
             
         if(newarr1[i][j]=='1' || newarr2[i][j]=='1' ){
             newArray.push('#')
         }else if(newarr1[i][j]=='0' && newarr2[i][j]=='0'){
             newArray.push(' ')
         }
             
        }     
        
         
     }
    
    for(let k=0; k<newArray.length ; k=k+n){
            result.push(newArray.slice(k,n+k))
         }
    
    return result.map(subArray => subArray.join(''));
}