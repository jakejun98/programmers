function solution(bin1, bin2) {
   const newbin1 =parseInt(Number(bin1) ,2);
    const newbin2 =parseInt(Number(bin2),2);
    let sum = newbin1 + newbin2 ;
    return sum.toString(2) + "" ;
} // bin1 bin2 십진수로 변경 후 합  >> 이진수로변경후 문자열로 출력 