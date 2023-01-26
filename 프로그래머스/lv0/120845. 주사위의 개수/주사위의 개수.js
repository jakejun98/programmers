function solution(box, n) {    //box= [가로,세로,높이]
    var answer = 0;
    let boxbox = box.map((a) => parseInt(a/n)).reduce((a,b) =>a*b);
    return answer= boxbox;
}