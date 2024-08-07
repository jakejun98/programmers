
function getUniqueElements(arr) {
    // 각 요소의 출현 횟수를 셀 객체를 생성합니다.
    const elementCounts = {};
    
    // 배열을 순회하면서 각 요소의 출현 횟수를 센다.
    arr.forEach(element => {
        elementCounts[element] = (elementCounts[element] || 0) + 1;
    });
    
    // 출현 횟수가 1인 요소만 필터링하여 반환한다.
    return arr.filter(element => elementCounts[element] === 1);
}
function getUniqueElementstwo(arr) {
    // 각 요소의 출현 횟수를 셀 객체를 생성합니다.
    const elementCounts = {};
    
    // 배열을 순회하면서 각 요소의 출현 횟수를 센다.
    arr.forEach(element => {
        elementCounts[element] = (elementCounts[element] || 0) + 1;
    });
    
    // 출현 횟수가 2인 요소만 필터링하여 반환한다.
    return arr.filter(element => elementCounts[element] === 2);
}
function getUniqueElementsthree(arr) {
    // 각 요소의 출현 횟수를 셀 객체를 생성합니다.
    const elementCounts = {};
    
    // 배열을 순회하면서 각 요소의 출현 횟수를 센다.
    arr.forEach(element => {
        elementCounts[element] = (elementCounts[element] || 0) + 1;
    });
    
    // 출현 횟수가 3인 요소만 필터링하여 반환한다.
    return arr.filter(element => elementCounts[element] === 3);
}


function solution(a, b, c, d) {
   const newArray = [a,b,c,d].sort();
   const noArray =[...new Set(newArray)] 
   const uniqueElements = getUniqueElements(newArray)
   const uniqueElementsthree = getUniqueElementsthree(newArray)
   const uniqueElementsthreetwo = getUniqueElementstwo(newArray)
   console.log(getUniqueElementsthree(newArray))
    // aaaa
   if(noArray.length==1){
       return 1111*newArray[0]
   }
    // aabb
   if(noArray.length==2 && newArray[0]==newArray[1] && newArray[2] == newArray[3] ){
       return (newArray[0]+newArray[2]) * Math.abs(newArray[0]-newArray[2])
   } 
    
   if(noArray.length==2 && getUniqueElementsthree(newArray).length==3){
       let difference = newArray.filter(x=>!noArray.includes(x))
       
      
       return ((10*uniqueElementsthree[0])+uniqueElements[0])**2
   }
  
   if(noArray.length==4){
       return newArray[0]
   }     
    
   if(noArray.length==3 ){
       const filterTwo = noArray.filter(n=>!uniqueElementsthreetwo.includes(n))
      return filterTwo[0]*filterTwo[1]
   }
    
    
    
}
