function solution(brown, yellow) {
    var answer = [];
    for (var y = 3; y <= (brown+yellow)/y; y++) {
        var x = Math.floor((brown+yellow)/y);
        if( (x-2)*(y-2)=== yellow) {
            break;
        }
    }
 
    return [x,y]; 
}
// var를 사용했기 때문에 for 루프 안에서 선언된 x는 루프가 끝난 후에도 유지되어 return 문에서 사용할 수 있습니다. 그러나 let을 사용하여 변수를 명확히 블록 스코프로 선언하는 것이 더 나은 코드 스타일입니다.