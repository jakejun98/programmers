function solution(n) {
    const list = Array.from({length:n+1}).fill(0)
    list[1]=1
    list[2]=2
        function pibo(number){
        list[number] = list[number-1]%1234567+list[number-2]%1234567
        if(number<n){
        pibo(number+1)
        }
        }
        pibo(3)
    return list[n]%1234567
}
