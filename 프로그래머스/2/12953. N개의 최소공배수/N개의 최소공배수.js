function solution(arr) {
    arr.sort((a,b)=>a-b)
    let n = 2;
    let ans = [];
    while(!arr.every(num => num === 1)){
        let divided = false;
        for(let i=0;i<arr.length;i++){
            if(arr[i]%n==0){
                arr[i] = arr[i]/n
                divided = true;
            }
        }
        if(divided){
            ans.push(n)
        }else n++
        
    }
    return  ans.reduce((acc, num) => acc * num, 1)
}