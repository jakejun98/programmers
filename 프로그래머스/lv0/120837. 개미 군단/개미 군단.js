function solution(hp) {
    let answer = 0;    
    while(hp){
        if(hp>=5){
            hp = hp - 5; 
            answer++;
        }
        if(hp>=3 && hp<5 ){
            hp=hp-3;
            answer++;
        }
        if(hp<3 && hp>=1){
            hp = hp-1;
            answer++;
        }
    }
    return answer;
}
//장군 5 병정3 일 1 