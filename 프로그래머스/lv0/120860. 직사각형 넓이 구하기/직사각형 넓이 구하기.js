function solution(dots) {
    const xArray = [];
    const yArray = [];
    for(let i=0 ; i<dots.length ; i++){
      if (!xArray.includes(dots[i][0])) {
    xArray.push(dots[i][0]);
  }
    }
    for(let j=0 ; j<dots.length ; j++){
        if (!yArray.includes(dots[j][1])) {
    yArray.push(dots[j][1]);
        }
    }
    return Math.abs(yArray[1]-yArray[0]) * Math.abs(xArray[1]-xArray[0]) ;
}