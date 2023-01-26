function solution(array) {
    let soltedArray = array.sort((a,b) => a-b);
    var answer = 0;
    let choi = -1 ;   //최빈값?
    let choiRepeat = 0 ; //최빈값이될때 몇번반복했는지
    let repeat = 0;  //똑같은숫자 몇번 등장했나
    let beforeNumber = -1;  //지금 숫자 이전숫자
    let isDupchoi = false ; //최빈값중복
    for(let i=0 ; i<array.length ; i++){
        if(beforeNumber !==array[i]){
            repeat = 1;
        }else {
            repeat +=1
        }
        if(repeat === choiRepeat){
            if(choi !==array[i]){
                isDupchoi = true;
            }
        }
        
        
        if(repeat > choiRepeat){
            choi = array[i] ;
            choiRepeat = repeat ;
            isDupchoi = false
        }
        beforeNumber = array[i];
    }
    if(isDupchoi) return -1 ;
    return choi;
} 
//  정렬 > 횟수확인 , 중복일때 ㄴ