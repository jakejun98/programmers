function solution(rsp) { //가위2 바위0 보5      2일때 0 0일때 5 5일때2
    var answer = '';
    let rspp = rsp.split("")
    for(let i=0 ; i<rspp.length ; i++){
       if(rspp[i] === '2'){
           rspp[i] = '0';
    }else if(rspp[i]==='0'){
            rspp[i] = '5'
    }else if (rspp[i]=== '5'){
            rspp[i] = '2'
    }
    }
    
    return answer = rspp.join("");
}